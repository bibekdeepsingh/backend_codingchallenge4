import express, { Router } from "express";
import { getUserProfile, deleteUser } from "../controllers/userController";
import { authenticateUser } from "../middleware/authMiddleware";
import { authorizeRole } from "../middleware/authzMiddleware";

const router: Router = express.Router();

// Protect /profile route (Any authenticated user can access)
router.get("/profile", authenticateUser, getUserProfile);

// Protect /users/:id route (Only admins can delete users)
router.delete("/:id", authenticateUser, authorizeRole("admin"), deleteUser);

export default router;
