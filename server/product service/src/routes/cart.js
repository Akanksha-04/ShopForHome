import express from "express";
import {
  get_cart_items,
  add_cart_item,
  delete_item,
} from "../controllers/cart.js";

const router = express.Router();

router.get("/cart/:userId", get_cart_items);
router.post("/cart/:userId", add_cart_item);
router.delete("/cart/:userId/:itemId", delete_item);

export default router;
