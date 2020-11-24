import mongoose from "mongoose";

const AddonsSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Addon = mongoose.model("Addons", AddonsSchema);
export default Addon;
