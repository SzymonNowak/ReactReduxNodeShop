import mongoose from "mongoose";

const BeveragesSchema = mongoose.Schema({
  name: String,
  price: Number,
  picture: String,
  type: { type: String, default: "beverages" },
});

const Beverage = mongoose.model("Beverages", BeveragesSchema);
export default Beverage;
