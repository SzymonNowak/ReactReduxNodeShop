import express from "express";
import cors from "cors";

import { addMeal, getAllMeal, getMeal } from "../controllers/mealController.js";

const router = express.Router();

router.get("/single/:id", getMeal);
router.post("/addMeal", cors(), addMeal);
router.get("/getAllMeals", getAllMeal);

export default router;
