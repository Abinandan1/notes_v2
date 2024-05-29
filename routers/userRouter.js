import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  resetPassword,
  updateUser,
  uploadImage,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.post("/upload", uploadImage);
router.patch("/update-user", validateUpdateUserInput, updateUser);
router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.get("/reset-password", resetPassword);

export default router;
