import express from "express";
import { addMeal, getAllMeal } from "../controllers/mealController.js";

const router = express.Router();

router.get("/addMeal", addMeal);
router.get("/getAllMeals", getAllMeal);

export default router;
