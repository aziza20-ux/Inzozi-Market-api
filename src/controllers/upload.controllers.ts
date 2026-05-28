import type { Request, Response } from "express";
import type { File as MulterFile } from "multer";
import { uploadToCloudinary } from "../config/cloudinary";
import type { AuthRequest } from "../middleware/auth";

type CreatorMediaRequest = AuthRequest & {
	file?: MulterFile;
};

export const uploadCreatorMedia = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const authReq = req as CreatorMediaRequest;

	if (!authReq.userId) {
		res.status(401).json({ error: "Unauthorized" });
		return;
	}

	if (authReq.role !== "CREATOR") {
		res.status(403).json({ error: "CREATOR_ONLY" });
		return;
	}

	if (!authReq.file) {
		res.status(400).json({ error: "No file uploaded" });
		return;
	}

	const uploaded = await uploadToCloudinary(authReq.file.buffer, "inzozi/content");

	res.status(201).json({
		status: "success",
		mediaUrl: uploaded.url,
		publicId: uploaded.publicId,
	});
};

export default {
	uploadCreatorMedia,
};
