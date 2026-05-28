"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireRole_js_1 = require("../middleware/requireRole.js");
function createResponse() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    };
}
describe("requireRole", () => {
    it("allows users with an accepted role", () => {
        const req = { user: { role: "CREATOR" } };
        const res = createResponse();
        const next = jest.fn();
        (0, requireRole_js_1.requireRole)("CREATOR")(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
    });
    it("rejects users without an accepted role", () => {
        const req = { user: { role: "CONSUMER" } };
        const res = createResponse();
        const next = jest.fn();
        (0, requireRole_js_1.requireRole)("BUSINESS")(req, res, next);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ error: "INSUFFICIENT_ROLE" });
        expect(next).not.toHaveBeenCalled();
    });
});
