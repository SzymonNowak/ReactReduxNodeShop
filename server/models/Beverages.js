import mongoose from "mongoose";

const BeveragesSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Beverage = mongoose.model("Beverages", BeveragesSchema);
export default Beverage;
