const mockPrisma = {
  creatorProfile: {
    findUnique: jest.fn(),
  },
  content: {
    create: jest.fn(),
  },
  premiumPurchase: {
    findFirst: jest.fn(),
  },
  user: {
    findFirst: jest.fn(),
  },
};

jest.mock("../config/prisma.js", () => ({
  __esModule: true,
  default: mockPrisma,
}));

jest.mock("../services/storage.service.js", () => ({
  __esModule: true,
  storageService: {
    generateUploadUrl: jest.fn(),
    validatePublicUrl: jest.fn(() => true),
  },
}));

jest.mock("../config/cloudinary.js", () => ({
  __esModule: true,
  uploadToCloudinary: jest.fn(),
}));

import { createContent } from "../controllers/content.controllers.js";

function createResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as any;
}

describe("Content creation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("links new content to the creator profile when one exists", async () => {
    mockPrisma.creatorProfile.findUnique.mockResolvedValue({
      id: "profile-1",
      userId: "creator-1",
    });
    mockPrisma.content.create.mockResolvedValue({
      id: "content-1",
      creatorId: "creator-1",
      creatorProfileId: "profile-1",
    });

    const req = {
      userId: "creator-1",
      role: "CREATOR",
      body: {
        title: "My content",
        description: "Description",
        contentUrl: "https://cdn.example.com/content/video.mp4",
        thumbnailUrl: "https://cdn.example.com/content/thumb.jpg",
        type: "video",
        visibility: "public",
      },
    } as any;
    const res = createResponse();

    await createContent(req, res);

    expect(mockPrisma.creatorProfile.findUnique).toHaveBeenCalledWith({
      where: { userId: "creator-1" },
    });
    expect(mockPrisma.content.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          creatorId: "creator-1",
          creatorProfileId: "profile-1",
        }),
      }),
    );
    expect(res.status).toHaveBeenCalledWith(201);
  });
});