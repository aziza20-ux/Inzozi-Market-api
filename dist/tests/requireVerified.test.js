"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireVerified_js_1 = require("../middleware/requireVerified.js");
function createResponse() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    };
}
describe("requireVerified", () => {
    it("allows Prisma-style verified users", () => {
        const req = { user: { verificationStatus: "VERIFIED" } };
        const res = createResponse();
        const next = jest.fn();
        (0, requireVerified_js_1.requireVerified)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
    });
    it("allows legacy token verified users", () => {
        const req = { user: { verification_status: "verified" } };
        const res = createResponse();
        const next = jest.fn();
        (0, requireVerified_js_1.requireVerified)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
    });
    it("rejects unverified users", () => {
        const req = { user: { verificationStatus: "PENDING" } };
        const res = createResponse();
        const next = jest.fn();
        (0, requireVerified_js_1.requireVerified)(req, res, next);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ error: "USER_NOT_VERIFIED" });
        expect(next).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=requireVerified.test.js.map