"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../../middleware/auth.js");
const requireRole_js_1 = require("../../middleware/requireRole.js");
const requireVerified_js_1 = require("../../middleware/requireVerified.js");
const payment_controllers_js_1 = require("../../controllers/payment.controllers.js");
const router = express_1.default.Router();
// POST /v1/payments/withdraw
router.post("/withdraw", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), payment_controllers_js_1.withdraw);
// POST /v1/payments/mock-provider/callback
router.post("/mock-provider/callback", payment_controllers_js_1.mockProviderCallback);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map