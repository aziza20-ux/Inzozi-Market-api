// import express from "express";
// import { authenticate } from "../middleware/auth.js";
// import { requireRole } from "../middleware/requireRole.js";
// import { requireVerified } from "../middleware/requireVerified.js";

// const router = express.Router();

// router.get(
//   "/dashboard",
//   authenticate,
//   requireVerified,
//   requireRole("ADMIN"),
//   (req, res) => {
//     res.json({
//       message: "Welcome Admin",
//     });
//   }
// );

// export default router;