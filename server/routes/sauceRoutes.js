import express from "express";
import { addSauce } from "../controllers/sauceController.js";
const router = express.Router();

router.get("/addSauce", addSauce);

export default router;
