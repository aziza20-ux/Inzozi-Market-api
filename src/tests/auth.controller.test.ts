const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
};

const mockRedis = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
};

const mockSendEmail = jest.fn();

jest.mock("../config/prisma", () => ({
  __esModule: true,
  default: mockPrisma,
}));

jest.mock("../services/redis.service", () => ({
  __esModule: true,
  redis: mockRedis,
}));

jest.mock("../config/email.js", () => ({
  __esModule: true,
  sendEmail: mockSendEmail,
}));

jest.mock("argon2", () => ({
  __esModule: true,
  default: {
    hash: jest.fn(async () => "hashed-password"),
    verify: jest.fn(),
  },
}));

import { register, verify } from "../controllers/auth.controller";

function createResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as any;
}

describe("Auth registration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sends an OTP email after registering with an email address", async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);
    mockPrisma.user.create.mockResolvedValue({ id: "user-1" });
    mockRedis.set.mockResolvedValue("OK");

    const req = {
      body: {
        name: "Alice",
        email: "alice@example.com",
        password: "password123",
        role: "CREATOR",
      },
    } as any;
    const res = createResponse();

    await register(req, res);

    expect(mockSendEmail).toHaveBeenCalledWith(
      "alice@example.com",
      "Your Inzozi Market verification code",
      expect.stringContaining("verification code"),
    );
    expect(mockRedis.set).toHaveBeenCalledWith(
      "otp:user-1",
      expect.stringMatching(/^\d{6}$/),
      "EX",
      300,
    );
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("verifies a user using email and otp", async () => {
    mockPrisma.user.findUnique.mockResolvedValue({ id: "user-1" });
    mockPrisma.user.update.mockResolvedValue({ id: "user-1" });
    mockRedis.get.mockResolvedValue("123456");
    mockRedis.del.mockResolvedValue(1);

    const req = {
      body: {
        email: "alice@example.com",
        otp: "123456",
      },
    } as any;
    const res = createResponse();

    await verify(req, res);

    expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: "alice@example.com" },
    });
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: "user-1" },
      data: { verificationStatus: "VERIFIED" },
    });
    expect(mockRedis.del).toHaveBeenCalledWith("otp:user-1");
    expect(res.status).toHaveBeenCalledWith(200);
  });
});