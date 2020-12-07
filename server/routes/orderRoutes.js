import express from "express";
import { addAddon, getAllAddons } from "../controllers/addonController.js";
const router = express.Router();

router.get("/acceptOrder", acceptOrder);
router.get("/getAllOrders", getAllOrders);

export default router;
