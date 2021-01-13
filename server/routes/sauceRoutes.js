import express from "express";
import {
  addSauce,
  getAllSauces,
  getSauce,
  updateSauce,
  deleteSauce,
} from "../controllers/sauceController.js";
const router = express.Router();
router.get("/single/:id", getSauce);
router.post("/addSauce", addSauce);
router.get("/getAllSauces", getAllSauces);
router.put("/updateSauce", updateSauce);
router.delete("/deleteSauce/:id", deleteSauce);

export default router;
