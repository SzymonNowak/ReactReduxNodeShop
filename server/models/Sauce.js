import mongoose from "mongoose";

const SauceSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Sauce = mongoose.model("Sauce", SauceSchema);
export default Sauce;
