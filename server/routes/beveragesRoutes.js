import express from "express";
import { addBeverage } from "../controllers/beveragesController.js";
const router = express.Router();

router.get("/addBeverage", addBeverage);

export default router;
