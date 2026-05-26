import { requireVerified } from "../middleware/requireVerified.js";

function createResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as any;
}

describe("requireVerified", () => {
  it("allows Prisma-style verified users", () => {
    const req = { user: { verificationStatus: "VERIFIED" } } as any;
    const res = createResponse();
    const next = jest.fn();

    requireVerified(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("allows legacy token verified users", () => {
    const req = { user: { verification_status: "verified" } } as any;
    const res = createResponse();
    const next = jest.fn();

    requireVerified(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("rejects unverified users", () => {
    const req = { user: { verificationStatus: "PENDING" } } as any;
    const res = createResponse();
    const next = jest.fn();

    requireVerified(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: "USER_NOT_VERIFIED" });
    expect(next).not.toHaveBeenCalled();
  });
});
