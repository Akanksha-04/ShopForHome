import exprees from "express";
import {get_orders,checkout} from "../controllers/order.controller";
const router = exprees.Router();

router.get("/order/:id", get_orders);
router.post("/order/:id", checkout);

export default router;
