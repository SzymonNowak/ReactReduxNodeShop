const mongoose = require("mongoose");
const Meal = require("../..//models/Meals");

const addMeal = async (req, res) => {
  const meal = req.body;
  const newMeal = new Meal(meal);
  try {
    await newMeal.save();
    res.status(201).json({ message: "added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const deleteMeal = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedMeal = await Meal.findOneAndDelete({
      _id: id,
    });
    res.status(201).json(deletedMeal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateMeal = async (req, res) => {
  const id = req.body.id;
  const { name, price, meatType, mealType, ingredients, sauce } = req.body.body;
  const mealToUpdate = {
    name,
    price,
    meatType,
    mealType,
    ingredients,
    sauce,
  };
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      {
        _id: id,
      },
      mealToUpdate,
      { new: true }
    );
    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllMeal = async (req, res) => {
  try {
    const allMeals = await Meal.find();
    res.status(201).json({ meals: allMeals });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getMeal = async (req, res) => {
  const id = req.params.id;
  try {
    const meal = await Meal.findById(id);
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = { addMeal, deleteMeal, updateMeal, getAllMeal, getMeal };
