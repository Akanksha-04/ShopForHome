import { Router } from "express";
import { signup, login } from "../controllers/user.js";

const router = Router();

// user rigister routes
router.post("/register", signup);
// user login routes
router.post("/login", login);

export default router;
