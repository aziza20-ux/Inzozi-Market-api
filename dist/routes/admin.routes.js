"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../middleware/auth.js");
const requireRole_js_1 = require("../middleware/requireRole.js");
const requireVerified_js_1 = require("../middleware/requireVerified.js");
const router = express_1.default.Router();
router.get("/dashboard", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("ADMIN"), (req, res) => {
    res.json({
        message: "Welcome Admin",
    });
});
exports.default = router;
//# sourceMappingURL=admin.routes.js.map