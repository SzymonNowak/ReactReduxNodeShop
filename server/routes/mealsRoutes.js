import express from "express";
import { addMeal } from "../controllers/mealController.js";
const router = express.Router();

router.get("/addMeal", addMeal);

export default router;
