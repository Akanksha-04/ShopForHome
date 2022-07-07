import { Router } from "express";
import { get_products, get_product, post_product, update_product, delete_product, bulk_upload, get_stocks,get_category } from "../controllers/product.js";
import auth from "../middleware/auth.js";
import multer from 'multer';

var storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storageEngine });

const router = Router();

router.get("/all", get_products);
router.get("/all/:category", get_category);
router.get("/item/:id", get_product);
router.get('/stocks', get_stocks)
router.post("/add", upload.single('image'), post_product);
router.put("/item/:id", update_product);
router.delete("/item/:id", delete_product);

// router.post("/bulk", bulk_upload);

export default router;
