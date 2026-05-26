"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../../middleware/auth.js");
const message_controller_js_1 = require("../../controllers/message.controller.js");
const router = express_1.default.Router();
// POST /v1/messages
router.post('/', auth_js_1.authenticate, message_controller_js_1.createMessage);
// GET /v1/messages/conversations
router.get('/conversations', auth_js_1.authenticate, message_controller_js_1.listConversations);
// GET /v1/messages/conversations/:convId
router.get('/conversations/:convId', auth_js_1.authenticate, message_controller_js_1.getConversationThread);
// PATCH /v1/messages/:id/read
router.patch('/:id/read', auth_js_1.authenticate, message_controller_js_1.markMessageRead);
// DELETE /v1/messages/:id
router.delete('/:id', auth_js_1.authenticate, message_controller_js_1.deleteMessage);
exports.default = router;
