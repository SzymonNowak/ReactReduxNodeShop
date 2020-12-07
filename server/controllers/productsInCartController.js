import ProductsInCart from "../models/ProductsInCart.js";
import Meal from "../models/Meals.js";
export const acceptCart = async (req, res) => {
  await new ProductsInCart({
    // mealsList: allMeals[0].id,
    mealsList: "5fc12bda075a913b50010719",
    beverages: "5fbe66ab32fa782804e1bae7",
    addons: "5fbe63c45dd88900e47cf0bb",
    sauces: "5fbff4a3c9686405c0a1582d",
  }).save();
};
export const getAllacceptCart = async (req, res) => {
  try {
    const allOProductsInCart = await ProductsInCart.find()
      .populate("mealsList")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    res.status(200).json({ ProductsInCart: allOProductsInCart });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
