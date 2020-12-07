import ProductsInCart from "../models/ProductsInCart.js";
import Meal from "../models/Meals.js";
export const acceptCart = async (req, res) => {
  const allMeals = await Meal.find();
  await new ProductsInCart({
    test: "jebac kurwa mongo",
    mealsList: allMeals[0].id,
  }).save();
};
export const getAllacceptCart = async (req, res) => {
  try {
    const allOProductsInCart = await ProductsInCart.find().populate(
      "mealsList"
    );
    res.status(200).json({ ProductsInCart: allOProductsInCart });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
