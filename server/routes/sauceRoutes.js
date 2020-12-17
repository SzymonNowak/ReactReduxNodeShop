import express from "express";
import {
  addSauce,
  getAllSauces,
  getSauce,
} from "../controllers/sauceController.js";
const router = express.Router();
router.get("/single/:id", getSauce);
router.post("/addSauce", addSauce);
router.get("/getAllSauces", getAllSauces);

export default router;
