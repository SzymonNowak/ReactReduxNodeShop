import mongoose from "mongoose";

const AddonsSchema = mongoose.Schema({
  name: String,
  type: { type: String, default: "addons" },
  price: Number,
  picture: String,
});

const Addon = mongoose.model("Addons", AddonsSchema);
export default Addon;
