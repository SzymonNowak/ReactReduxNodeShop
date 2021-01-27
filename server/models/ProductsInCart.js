const mongoose = require("mongoose");

const ProductsInCartSchema = mongoose.Schema({
  meals: [{ type: mongoose.Schema.Types.ObjectId, type: String, ref: "Meals" }],
  // beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Beverages" }],
  // addons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Addons" }],
  // sauces: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sauces" }],
});

const ProductsInCart = mongoose.model("ProductsInCart", ProductsInCartSchema);

module.exports = ProductsInCart;
