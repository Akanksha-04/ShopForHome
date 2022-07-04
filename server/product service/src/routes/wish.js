import express from "express";
import {
  get_wish_lists,
  add_wish_list,
  delete_list,
} from "../controllers/wish.js";

const router = express.Router();

router.get("/cart/:id", get_wish_list);
router.post("/cart/:id",  add_wish_list,);
router.delete("/cart/:userId/:itemId", delete_list);

export default router;
