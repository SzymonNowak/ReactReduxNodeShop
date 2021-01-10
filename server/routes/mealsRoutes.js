import express from "express";
import cors from "cors";

import {
  addMeal,
  getAllMeal,
  getMeal,
  updateMeal,
} from "../controllers/mealController.js";

const router = express.Router();

router.get("/single/:id", getMeal);
router.post("/addMeal", addMeal);
router.put("/updateMeal", updateMeal);
router.get("/getAllMeals", getAllMeal);

export default router;
