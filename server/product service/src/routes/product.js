import { Router } from "express";
import { get_products, get_product, post_product, update_product, delete_product, bulk_upload } from "../controllers/product.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/all", get_products);
router.get("/:id", get_product);
router.post("/add", post_product);
router.put("/:id", update_product);
router.delete("/:id", delete_product);
router.post("/bulk", bulk_upload);

export default router;
