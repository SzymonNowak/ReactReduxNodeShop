import express from "express";
import {
  acceptCart,
  getAllacceptCart,
} from "../controllers/productsInCartController.js";

const router = express.Router();

router.get("/acceptCart", acceptCart);
router.get("/getAllacceptCart", getAllacceptCart);

export default router;
