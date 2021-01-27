const mongoose = require("mongoose");

const AddonsSchema = mongoose.Schema({
  name: String,
  type: { type: String, default: "addons" },
  price: Number,
  picture: String,
});

const Addon = mongoose.model("Addons", AddonsSchema);
module.exports = Addon;
