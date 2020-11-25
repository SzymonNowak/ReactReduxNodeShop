import mongoose from "mongoose";

const MealsSchema = mongoose.Schema({
  name: String,
  price: Number,
  meatType: String,
  mealType: String,
  components: [String],
});

const Meal = mongoose.model("Meals", MealsSchema);
export default Meal;
