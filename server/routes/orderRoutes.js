import express from "express";
import {
  makeOrder,
  getAllOrders,
  getOrder,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/makeOrder", makeOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrders", getOrder);

export default router;
