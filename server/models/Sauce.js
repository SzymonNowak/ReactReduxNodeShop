import mongoose from "mongoose";

const SauceSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Sauce = mongoose.model("Sauces", SauceSchema);
export default Sauce;
