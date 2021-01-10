import express from "express";
import {
  addSauce,
  getAllSauces,
  getSauce,
  updateSauce,
} from "../controllers/sauceController.js";
const router = express.Router();
router.get("/single/:id", getSauce);
router.post("/addSauce", addSauce);
router.get("/getAllSauces", getAllSauces);
router.put("/updateSauce", updateSauce);

export default router;
