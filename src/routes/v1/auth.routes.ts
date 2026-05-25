import { Router } from "express";
import {
  login,
  logout,
  refresh,
  register,
  verify,
} from "../../controllers/auth.controllers.js";

const router = Router();

router.post("/register", register);
router.patch("/verify", verify);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

export default router;
