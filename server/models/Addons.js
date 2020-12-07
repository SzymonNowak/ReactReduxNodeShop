import mongoose from "mongoose";

const AddonsSchema = mongoose.Schema({
  name: String,
  price: Number,
  picture: String,
});

const Addon = mongoose.model("Addons", AddonsSchema);
export default Addon;
