import express from "express";
import cors from "cors";

import {
  addMeal,
  getAllMeal,
  getMeal,
  updateMeal,
  deleteMeal,
} from "../controllers/mealController.js";

const router = express.Router();

router.get("/single/:id", getMeal);
router.post("/addMeal", addMeal);
router.put("/updateMeal", updateMeal);
router.get("/getAllMeals", getAllMeal);
router.delete("/deleteMeal/:id", deleteMeal);

export default router;
