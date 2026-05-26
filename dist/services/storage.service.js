"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = exports.LocalStubStorageService = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
function safeFilename(filename) {
    const parsed = path_1.default.parse(filename);
    const base = parsed.name.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80);
    const ext = parsed.ext.replace(/[^a-zA-Z0-9.]/g, "").slice(0, 16);
    return `${base || "upload"}${ext}`;
}
class LocalStubStorageService {
    uploadDir = path_1.default.resolve(process.env.LOCAL_STORAGE_DIR ?? "storage/uploads");
    publicBaseUrl = (process.env.LOCAL_STORAGE_PUBLIC_BASE_URL ??
        "https://local-storage.inzozi.test").replace(/\/$/, "");
    async generateUploadUrl(filename, mimeType) {
        const storageKey = `${(0, crypto_1.randomUUID)()}-${safeFilename(filename)}`;
        const localPath = path_1.default.join(this.uploadDir, storageKey);
        await (0, promises_1.mkdir)(this.uploadDir, { recursive: true });
        await (0, promises_1.writeFile)(localPath, "");
        await (0, promises_1.writeFile)(`${localPath}.json`, JSON.stringify({ filename, mimeType, storageKey }, null, 2));
        const publicUrl = `${this.publicBaseUrl}/uploads/${storageKey}`;
        return {
            uploadUrl: publicUrl,
            publicUrl,
            storageKey,
            method: "PUT",
            headers: {
                "content-type": mimeType,
            },
        };
    }
    validatePublicUrl(url) {
        try {
            const parsed = new URL(url);
            return parsed.protocol === "https:";
        }
        catch {
            return false;
        }
    }
}
exports.LocalStubStorageService = LocalStubStorageService;
function createStorageService() {
    const driver = process.env.STORAGE_DRIVER ?? "local";
    if (driver === "local")
        return new LocalStubStorageService();
    throw new Error(`Unsupported STORAGE_DRIVER: ${driver}`);
}
exports.storageService = createStorageService();
