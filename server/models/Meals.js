const mongoose = require("mongoose");

const MealsSchema = mongoose.Schema({
  name: String,
  price: Number,
  meatType: String,
  mealType: String,
  ingredients: [String],
  type: { type: String, default: "meals" },
  photo: String,
  sauce: String,
});

const Meal = mongoose.model("Meals", MealsSchema);
module.exports = Meal;
