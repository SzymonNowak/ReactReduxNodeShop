const express = require("express");
const router = express.Router();
const {
  addMeal,
  deleteMeal,
  updateMeal,
  getAllMeal,
  getMeal,
} = require("../controllers/mealController");

router.get("/single/:id", getMeal);

router.post("/addMeal", addMeal);
router.put("/updateMeal", updateMeal);
router.get("/getAllMeals", getAllMeal);
router.delete("/deleteMeal/:id", deleteMeal);

module.exports = router;
