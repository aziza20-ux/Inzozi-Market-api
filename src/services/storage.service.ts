import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export type UploadUrlResult = {
  uploadUrl: string;
  publicUrl: string;
  storageKey: string;
  method: "PUT";
  headers: Record<string, string>;
};

export interface StorageService {
  generateUploadUrl(
    filename: string,
    mimeType: string,
  ): Promise<UploadUrlResult>;
  validatePublicUrl(url: string): boolean;
}

function safeFilename(filename: string) {
  const parsed = path.parse(filename);
  const base = parsed.name.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80);
  const ext = parsed.ext.replace(/[^a-zA-Z0-9.]/g, "").slice(0, 16);
  return `${base || "upload"}${ext}`;
}

export class LocalStubStorageService implements StorageService {
  private readonly uploadDir = path.resolve(
    process.env.LOCAL_STORAGE_DIR ?? "storage/uploads",
  );

  private readonly publicBaseUrl = (
    process.env.LOCAL_STORAGE_PUBLIC_BASE_URL ??
    "https://local-storage.inzozi.test"
  ).replace(/\/$/, "");

  async generateUploadUrl(
    filename: string,
    mimeType: string,
  ): Promise<UploadUrlResult> {
    const storageKey = `${randomUUID()}-${safeFilename(filename)}`;
    const localPath = path.join(this.uploadDir, storageKey);

    await mkdir(this.uploadDir, { recursive: true });
    await writeFile(localPath, "");
    await writeFile(
      `${localPath}.json`,
      JSON.stringify({ filename, mimeType, storageKey }, null, 2),
    );

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

  validatePublicUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:";
    } catch {
      return false;
    }
  }
}

function createStorageService(): StorageService {
  const driver = process.env.STORAGE_DRIVER ?? "local";

  if (driver === "local") return new LocalStubStorageService();

  throw new Error(`Unsupported STORAGE_DRIVER: ${driver}`);
}

export const storageService = createStorageService();
