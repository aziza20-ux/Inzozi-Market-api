"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post('/register', auth_controller_1.register); //done
router.post('/login', auth_controller_1.login); //done
router.post('/verify', auth_controller_1.verify);
router.patch('/verify', auth_controller_1.verify);
router.post('/refresh', auth_controller_1.refresh);
router.post('/logout', auth_controller_1.logout);
exports.default = router;
