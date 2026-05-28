import multer from "multer";

// memoryStorage keeps the file in memory as req.file.buffer
// This is what we need to stream the file directly to Cloudinary
// DiskStorage would save to disk first — unnecessary extra step
const storage = multer.memoryStorage();

// File filter — only allow image files
// This runs before the file is stored, rejecting non-image uploads early
function fileFilter(
  req: Express.Request,
  file: { mimetype: string },
  cb: multer.FileFilterCallback
) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // accept the file
  } else {
    cb(new Error("Only image files are allowed (jpeg, png, webp, gif)"));
  }
}

const upload = multer({
  storage,
  fileFilter,

  // Limit file size to 5MB
  // Without this, users could upload huge files and crash your server
  limits: { fileSize: 5 * 1024 * 1024 },
});

const mediaAllowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "audio/mpeg",
  "audio/wav",
  "audio/ogg",
];

function mediaFileFilter(
  req: Express.Request,
  file: { mimetype: string },
  cb: multer.FileFilterCallback,
) {
  if (mediaAllowedTypes.includes(file.mimetype)) {
    cb(null, true);
    return;
  }

  cb(new Error("Unsupported media type"));
}

export const mediaUpload = multer({
  storage,
  fileFilter: mediaFileFilter,
  limits: { fileSize: 50 * 1024 * 1024 },
});

export default upload;