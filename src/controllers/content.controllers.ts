import type { Request, Response } from "express";
import type { File as MulterFile } from "multer";
import prisma from "../config/prisma.js";
import { storageService } from "../services/storage.service.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import { AuthRequest } from "../middleware/auth.js";

type Visibility = "public" | "paid";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function hasCompletedPremiumPurchase(userId: string, contentId: string) {
  const purchase = await prisma.premiumPurchase.findFirst({
    where: {
      userId,
      contentId,
      status: { in: ["SUCCESS", "COMPLETED", "paid", "completed"] },
    },
  });
  return !!purchase;
}

function isPaidContent(contentVisibility: Visibility) {
  return contentVisibility === "paid";
}

function getMediaUrl(body: any) {
  return body?.media_url ?? body?.mediaUrl ?? body?.contentUrl;
}

async function resolveContentMedia(req: Request) {
  const file = (req as Request & { file?: MulterFile }).file;
  if (file) {
    const resourceType = file.mimetype.startsWith("video/") ? "video" : "auto";
    const uploaded = await uploadToCloudinary(file.buffer, "inzozi/content", resourceType);
    return uploaded.url;
  }
  return getMediaUrl(req.body);
}

/**
 * Attach likes count, whether the requesting user has liked, and comments
 * to a content item (or a list of items) fetched from Prisma.
 */
async function enrichContent(
  content: any,
  requestingUserId?: string,
): Promise<any> {
  const [likesCount, commentsRaw] = await Promise.all([
    prisma.contentLike.count({ where: { contentId: content.id } }),
    prisma.contentComment.findMany({
      where: { contentId: content.id },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { id: true, name: true } } },
    }),
  ]);

  let liked = false;
  if (requestingUserId) {
    const existing = await prisma.contentLike.findUnique({
      where: { contentId_userId: { contentId: content.id, userId: requestingUserId } },
    });
    liked = !!existing;
  }

  const comments = commentsRaw.map((c: any) => ({
    id: c.id,
    userId: c.userId,
    user: c.user?.name ?? "User",
    text: c.text,
    createdAt: c.createdAt,
  }));

  return { ...content, likes: likesCount, liked, comments };
}

async function enrichContentList(
  list: any[],
  requestingUserId?: string,
): Promise<any[]> {
  return Promise.all(list.map((item) => enrichContent(item, requestingUserId)));
}

// ---------------------------------------------------------------------------
// Upload URL
// ---------------------------------------------------------------------------

export async function generateContentUploadUrl(req: Request, res: Response) {
  try {
    const { filename, mimeType } = req.body ?? {};

    if (!filename || !mimeType) {
      return res.status(400).json({ error: "FILENAME_AND_MIME_TYPE_REQUIRED" });
    }

    const upload = await storageService.generateUploadUrl(
      String(filename),
      String(mimeType),
    );

    return res.status(201).json(upload);
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Create content
// ---------------------------------------------------------------------------

export async function createContent(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    const role = req.role;

    if (!userId) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    if (role !== "CREATOR") {
      return res.status(403).json({ error: "CREATOR_ONLY" });
    }

    const {
      title,
      description,
      thumbnailUrl,
      type,
      visibility,
      price,
      currency,
    } = req.body ?? {};
    const mediaUrl = await resolveContentMedia(req);

    if (!title || !mediaUrl || !type || !visibility) {
      return res.status(400).json({ error: "MISSING_REQUIRED_FIELDS" });
    }

    if (!storageService.validatePublicUrl(String(mediaUrl))) {
      return res.status(400).json({ error: "INVALID_MEDIA_URL" });
    }

    if (visibility === "paid") {
      if (price === undefined || !currency) {
        return res.status(400).json({
          error: "PAID_CONTENT_REQUIRES_PRICE_AND_CURRENCY",
        });
      }
    }

    const creatorProfile = await prisma.creatorProfile.findUnique({
      where: { userId },
    });

    const created = await prisma.content.create({
      data: {
        title,
        description: description ?? null,
        contentUrl: String(mediaUrl),
        thumbnailUrl: thumbnailUrl ?? null,
        type,
        visibility,
        price: visibility === "paid" ? Number(price) : null,
        currency: visibility === "paid" ? String(currency) : null,
        creatorId: userId,
        ...(creatorProfile ? { creatorProfileId: creatorProfile.id } : {}),
      },
    });

    // Return enriched (likes: 0, comments: []) for consistency
    res.status(201).json(await enrichContent(created));
  } catch (e) {
    console.error("createContent error:", e);
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// List content
// ---------------------------------------------------------------------------

export async function getContentList(req: AuthRequest, res: Response) {
  try {
    const { type, visibility } = req.query;

    const where: any = { deletedAt: null };
    if (typeof type === "string") where.type = type;
    if (typeof visibility === "string") where.visibility = visibility;

    const list = await prisma.content.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const enriched = await enrichContentList(list, req.userId);
    res.json(enriched);
  } catch (e) {
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Get single content
// ---------------------------------------------------------------------------

export async function getContent(req: AuthRequest, res: Response) {
  try {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "INVALID_CONTENT_ID" });
    }

    const content = await prisma.content.findFirst({
      where: { id: String(id), deletedAt: null },
    });

    if (!content) {
      return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
    }

    if (isPaidContent(content.visibility)) {
      const user = await prisma.user.findFirst({ where: { id: req.userId } });
      if (!user) {
        return res.status(403).json({ error: "CONTENT_ACCESS_DENIED" });
      }
      const ok = await hasCompletedPremiumPurchase(user.id, content.id);
      if (!ok) {
        return res.status(403).json({ error: "CONTENT_ACCESS_DENIED" });
      }
    }

    res.json(await enrichContent(content, req.userId));
  } catch (e) {
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Patch content
// ---------------------------------------------------------------------------

export async function patchContent(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    const role = req.role;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const content = await prisma.content.findFirst({
      where: { id: String(id), deletedAt: null },
    });
    if (!content) return res.status(404).json({ error: "CONTENT_NOT_FOUND" });

    if (content.creatorId !== userId && role !== "ADMIN") {
      return res.status(403).json({ error: "CONTENT_UPDATE_DENIED" });
    }

    const {
      title,
      description,
      thumbnailUrl,
      type,
      visibility,
      price,
      currency,
    } = req.body ?? {};
    const mediaUrl = await resolveContentMedia(req);

    if (mediaUrl !== undefined && !storageService.validatePublicUrl(String(mediaUrl))) {
      return res.status(400).json({ error: "INVALID_MEDIA_URL" });
    }

    if (visibility === "paid") {
      if (price === undefined || !currency) {
        return res.status(400).json({
          error: "PAID_CONTENT_REQUIRES_PRICE_AND_CURRENCY",
        });
      }
    }

    const updated = await prisma.content.update({
      where: { id: String(id) },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(mediaUrl !== undefined ? { contentUrl: String(mediaUrl) } : {}),
        ...(thumbnailUrl !== undefined ? { thumbnailUrl } : {}),
        ...(type !== undefined ? { type } : {}),
        ...(visibility !== undefined ? { visibility } : {}),
        ...(price !== undefined
          ? { price: visibility === "paid" ? Number(price) : null }
          : {}),
        ...(currency !== undefined
          ? { currency: visibility === "paid" ? String(currency) : null }
          : {}),
      },
    });

    res.json(await enrichContent(updated, userId));
  } catch (e) {
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Delete content
// ---------------------------------------------------------------------------

export async function deleteContent(req: AuthRequest, res: Response) {
  try {
    const user = await prisma.user.findFirst({ where: { id: req.userId } });
    const { id } = req.params;

    if (!user) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const content = await prisma.content.findFirst({
      where: { id: String(id), deletedAt: null },
    });
    if (!content) return res.status(404).json({ error: "CONTENT_NOT_FOUND" });

    if (content.creatorId !== user.id && user.role !== "ADMIN") {
      return res.status(403).json({ error: "CONTENT_DELETE_DENIED" });
    }

    await prisma.content.update({
      where: { id: String(id) },
      data: { deletedAt: new Date() },
    });

    res.status(204).json({ message: "deleted successfully", id });
  } catch (e) {
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Moderation (deprecated)
// ---------------------------------------------------------------------------

export async function moderationUpdate(req: AuthRequest, res: Response) {
  return res.status(404).json({ error: "NOT_FOUND" });
}

// ---------------------------------------------------------------------------
// Creator profile content
// ---------------------------------------------------------------------------

export async function getCreatorProfileContent(req: AuthRequest, res: Response) {
  try {
    const { id } = req.params;
    const { visibility, type } = req.query;

    const creatorProfile = await prisma.creatorProfile.findFirst({
      where: { id: String(id) },
    });

    if (!creatorProfile) {
      return res.json([]);
    }

    const where: any = { deletedAt: null, creatorId: creatorProfile.userId };
    if (type) where.type = String(type);
    if (visibility) where.visibility = String(visibility);

    const list = await prisma.content.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const user = req.user;
    const accessible: typeof list = [];
    for (const c of list) {
      if (c.visibility === "paid") {
        if (!user) continue;
        const ok = await hasCompletedPremiumPurchase(user.id, c.id);
        if (!ok) continue;
      }
      accessible.push(c);
    }

    res.json(await enrichContentList(accessible, req.userId));
  } catch (e) {
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Like / unlike content  (POST /content/:id/like)
// ---------------------------------------------------------------------------

export async function likeContent(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const { id: contentId } = req.params;

    const content = await prisma.content.findFirst({
      where: { id: String(contentId), deletedAt: null },
    });
    if (!content) {
      return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
    }

    // Toggle: if already liked → remove; otherwise → create
    const existing = await prisma.contentLike.findUnique({
      where: { contentId_userId: { contentId: String(contentId), userId } },
    });

    if (existing) {
      await prisma.contentLike.delete({
        where: { contentId_userId: { contentId: String(contentId), userId } },
      });
    } else {
      await prisma.contentLike.create({
        data: { contentId: String(contentId), userId },
      });
    }

    const likes = await prisma.contentLike.count({
      where: { contentId: String(contentId) },
    });

    return res.json({
      contentId,
      likes,
      liked: !existing, // true if we just added, false if we just removed
    });
  } catch (e) {
    console.error("likeContent error:", e);
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

// ---------------------------------------------------------------------------
// Comment on content  (POST /content/:id/comment)
// ---------------------------------------------------------------------------

export async function commentOnContent(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const { id: contentId } = req.params;
    const { text } = req.body ?? {};

    if (!text || !String(text).trim()) {
      return res.status(400).json({ error: "COMMENT_TEXT_REQUIRED" });
    }

    const content = await prisma.content.findFirst({
      where: { id: String(contentId), deletedAt: null },
    });
    if (!content) {
      return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
    }

    const comment = await prisma.contentComment.create({
      data: {
        contentId: String(contentId),
        userId,
        text: String(text).trim(),
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return res.status(201).json({
      id: comment.id,
      contentId: comment.contentId,
      userId: comment.userId,
      user: comment.user?.name ?? "User",
      text: comment.text,
      createdAt: comment.createdAt,
    });
  } catch (e) {
    console.error("commentOnContent error:", e);
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export default {
  generateContentUploadUrl,
  createContent,
  getContentList,
  getContent,
  patchContent,
  deleteContent,
  getCreatorProfileContent,
  likeContent,
  commentOnContent,
};