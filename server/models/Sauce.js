import mongoose from "mongoose";

const SauceSchema = mongoose.Schema({
  name: String,
  price: Number,
  picture: String,
});

const Sauce = mongoose.model("Sauces", SauceSchema);
export default Sauce;
