const mockPrisma = {
	user: {
		findUnique: jest.fn(),
		update: jest.fn(),
	},
};

const mockUploadToCloudinary = jest.fn();

jest.mock("../config/prisma.js", () => ({
	__esModule: true,
	default: mockPrisma,
}));

jest.mock("../config/cloudinary", () => ({
	__esModule: true,
	uploadToCloudinary: mockUploadToCloudinary,
}));

import { uploadProfilePicture } from "../controllers/upload.controllers.js";

function createResponse() {
	return {
		status: jest.fn().mockReturnThis(),
		json: jest.fn().mockReturnThis(),
	} as any;
}

describe("uploadProfilePicture", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("uploads a profile picture and updates the authenticated user", async () => {
		mockPrisma.user.findUnique.mockResolvedValue({ id: "user-1" });
		mockUploadToCloudinary.mockResolvedValue({
			url: "https://cdn.example.com/profile.jpg",
			publicId: "profile-1",
		});
		mockPrisma.user.update.mockResolvedValue({
			id: "user-1",
			email: "user@example.com",
			password: "hashed-password",
			profileImage: "https://cdn.example.com/profile.jpg",
		});

		const req = {
			userId: "user-1",
			file: { buffer: Buffer.from("image-bytes") },
		} as any;
		const res = createResponse();

		await uploadProfilePicture(req, res);

		expect(mockUploadToCloudinary).toHaveBeenCalledWith(
			Buffer.from("image-bytes"),
			"inzozi/profile-pictures",
		);
		expect(mockPrisma.user.update).toHaveBeenCalledWith({
			where: { id: "user-1" },
			data: { profileImage: "https://cdn.example.com/profile.jpg" },
		});
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(
			expect.objectContaining({
				message: "Profile picture uploaded successfully",
				profileImage: "https://cdn.example.com/profile.jpg",
			}),
		);
	});
});