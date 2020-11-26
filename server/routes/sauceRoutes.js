import express from "express";
import { addSauce, getAllSauces } from "../controllers/sauceController.js";
const router = express.Router();

router.get("/addSauce", addSauce);
router.get("/getAllSauces", getAllSauces);

export default router;
