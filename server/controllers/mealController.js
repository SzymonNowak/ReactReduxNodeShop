import Meal from "../models/Meals.js";

export const addMeal = async (req, res) => {
  await new Meal({
    name: "meal",
    price: 123,
    meatType: "beef",
    components: ["jeden", "dwa", "trzy"],
  }).save();
};

export const getAllMeal = async (req, res) => {
  try {
    const allMeals = await Meal.find();
    res.status(200).json(allMeals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
