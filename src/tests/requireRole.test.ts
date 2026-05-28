import { requireRole } from "../middleware/requireRole.js";

function createResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as any;
}

describe("requireRole", () => {
  it("allows users with an accepted role", () => {
    const req = { user: { role: "CREATOR" } } as any;
    const res = createResponse();
    const next = jest.fn();

    requireRole("CREATOR")(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("rejects users without an accepted role", () => {
    const req = { user: { role: "CONSUMER" } } as any;
    const res = createResponse();
    const next = jest.fn();

    requireRole("BUSINESS")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: "INSUFFICIENT_ROLE" });
    expect(next).not.toHaveBeenCalled();
  });
});
