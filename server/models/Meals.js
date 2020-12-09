import mongoose from "mongoose";

const MealsSchema = mongoose.Schema({
  name: String,
  price: Number,
  meatType: String,
  mealType: String,
  ingredients: [String],
  // img: String,
  sauce: String,
});

const Meal = mongoose.model("Meals", MealsSchema);
export default Meal;
