import { Router } from "express";
import { add_coupon, get_coupon } from "../controllers/discount.js";

const router = Router();

// get coupon
router.get("/coupon", get_coupon);
// add coupon
router.post("/coupon", add_coupon);

export default router;
