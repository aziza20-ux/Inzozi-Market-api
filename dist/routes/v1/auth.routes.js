"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_js_1 = require("../../controllers/auth.controllers.js");
const router = (0, express_1.Router)();
router.post("/register", auth_controllers_js_1.register);
router.patch("/verify", auth_controllers_js_1.verify);
router.post("/login", auth_controllers_js_1.login);
router.post("/refresh", auth_controllers_js_1.refresh);
router.post("/logout", auth_controllers_js_1.logout);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map