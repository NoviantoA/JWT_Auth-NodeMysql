import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

// express router
const router = express.Router();
//  get user
router.get("/users", verifyToken, getUsers);
// Register
router.post("/users", Register);
// login
router.post("/login", Login);
// refresh token
router.get("/token", refreshToken);
// Logout
router.delete("/logout", Logout);

export default router;
