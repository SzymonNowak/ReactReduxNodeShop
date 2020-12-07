import mongoose from "mongoose";

const ProductsInCartSchema = mongoose.Schema({
  test: String,
  mealsList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meals" }],
  // beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Beverage" }],
  // addons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Addon" }],
  // sauces: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sauce" }],
});

const ProductsInCart = mongoose.model("ProductsInCart", ProductsInCartSchema);

export default ProductsInCart;
