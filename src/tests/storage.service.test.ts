import { contentSchema } from "../validators/schema.validators.js";
import { LocalStubStorageService } from "../services/storage.service.js";

describe("StorageService", () => {
  it("generates a local fake HTTPS upload URL", async () => {
    const storage = new LocalStubStorageService();

    const upload = await storage.generateUploadUrl("my image.png", "image/png");

    expect(upload.method).toBe("PUT");
    expect(upload.publicUrl).toMatch(/^https:\/\//);
    expect(upload.uploadUrl).toBe(upload.publicUrl);
    expect(upload.headers).toEqual({ "content-type": "image/png" });
  });

  it("validates media_url as HTTPS in the content schema", () => {
    const valid = contentSchema.safeParse({
      title: "Demo content",
      type: "image",
      media_url: "https://cdn.example.com/demo.png",
      visibility: "public",
    });

    const invalid = contentSchema.safeParse({
      title: "Demo content",
      type: "image",
      media_url: "http://cdn.example.com/demo.png",
      visibility: "public",
    });

    expect(valid.success).toBe(true);
    expect(invalid.success).toBe(false);
  });
});
