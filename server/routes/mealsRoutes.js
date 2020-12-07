import express from "express";
import cors from "cors";

import { addMeal, getAllMeal } from "../controllers/mealController.js";

const router = express.Router();

router.post("/addMeal", cors(), addMeal);
router.get("/getAllMeals", getAllMeal);

export default router;
