import express from "express";
import { acceptOrder, getAllOrders } from "../controllers/orderController.js";
const router = express.Router();

router.get("/acceptOrder", acceptOrder);
router.get("/getAllOrders", getAllOrders);

export default router;
