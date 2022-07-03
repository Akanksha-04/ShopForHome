import { Router } from "express";
import {get_products,get_product,post_product,update_product,delete_product,bulk_upload} from "../controllers/product.js";

const router = Router();

router.get("/products", get_products);
router.get("/products/:id", get_product);
router.post("/products", post_product);
router.put("/products/:id", update_product);
router.delete("/products/:id", delete_product);
router.post("/products/bulk", bulk_upload);

export default router;
