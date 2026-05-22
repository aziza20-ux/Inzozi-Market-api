"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_js_1 = __importDefault(require("./users.routes.js"));
const content_routes_js_1 = __importDefault(require("./content.routes.js"));
const express_1 = require("express");
const v1Routes = (0, express_1.Router)();
v1Routes.use("/users", users_routes_js_1.default);
v1Routes.use("/content", content_routes_js_1.default);
exports.default = v1Routes;
//# sourceMappingURL=index.js.map