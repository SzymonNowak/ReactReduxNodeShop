import Meal from "../models/Meals.js";

export const addMeal = async (req, res) => {
  await new Meal({
    name: "meal",
    price: 123,
    meatType: "beef",
    components: ["jeden", "dwa", "trzy"],
  }).save();
};
