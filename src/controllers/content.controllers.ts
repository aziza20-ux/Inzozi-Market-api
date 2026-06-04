import type { Request, Response } from "express";
import prisma from "../config/prisma.js";

<<<<<<< HEAD
export const createContent = async (req: Request, res: Response) => {
=======
type Visibility = "public" | "paid";

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

export async function generateContentUploadUrl(req: Request, res: Response) {
>>>>>>> origin/espy
  try {
    const user = req.user;


    // check logged in user
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    // verified creator check
    if (!user?.verification_status ) {
      return res.status(403).json({
        message: "Only verified creators can upload content",
      });
    }

    const {
      title,
      description,
      contentUrl,
      thumbnailUrl,
      type,
      visibility,
      price,
      currency,
    } = req.body;

    // validate paid content
    if (visibility === "paid") {
      if (!price || !currency) {
        return res.status(400).json({
          message: "Price and currency required for paid content",
        });
      }
    }

    const content = await prisma.content.create({
      data: {
        title,
        description,
        contentUrl,
        thumbnailUrl,
        type,
        visibility,
        price,
        currency,
        creatorId: user.id,
      },
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error });
  }
};