import type { Request, Response } from "express";
import type { File as MulterFile } from "multer";
import prisma from "../config/prisma.js";
import { uploadToCloudinary } from "../config/cloudinary";
import type { AuthRequest } from "../middleware/auth";

type CreatorMediaRequest = AuthRequest & {
	file?: MulterFile;
};

type ProfilePictureRequest = AuthRequest & {
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

	const resourceType = authReq.file.mimetype.startsWith("video/") ? "video" : "auto";
	const uploaded = await uploadToCloudinary(authReq.file.buffer, "inzozi/content", resourceType);

	res.status(201).json({
		status: "success",
		mediaUrl: uploaded.url,
		publicId: uploaded.publicId,
	});
};

export const uploadProfilePicture = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const authReq = req as ProfilePictureRequest;

	if (!authReq.userId) {
		res.status(401).json({ error: "Unauthorized" });
		return;
	}

	if (!authReq.file) {
		res.status(400).json({ error: "No file uploaded" });
		return;
	}

	const existingUser = await prisma.user.findUnique({
		where: { id: authReq.userId },
		select: { id: true },
	});

	if (!existingUser) {
		res.status(401).json({ error: "Unauthorized" });
		return;
	}

	const uploaded = await uploadToCloudinary(
		authReq.file.buffer,
		"inzozi/profile-pictures",
	);

	const updatedUser = await prisma.user.update({
		where: { id: authReq.userId },
		data: { profileImage: uploaded.url },
	});

	// Remove password before returning the user record.
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { password, ...safeUser } = updatedUser;

	res.status(200).json({
		message: "Profile picture uploaded successfully",
		profileImage: uploaded.url,
		data: safeUser,
	});
};

export default {
	uploadCreatorMedia,
	uploadProfilePicture,
};
