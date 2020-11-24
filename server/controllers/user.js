import User from "../models/User.js";
import Addon from "../models/Addons.js";
import Meal from "../models/Meals.js";
import Beverage from "../models/Beverages.js";
import Sauce from "../models/Sauce.js";
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  await new User({ name: "user", age: 6666 }).save();
  await new Addon({ name: "addon", price: 18 }).save();
  await new Meal({
    name: "meal",
    price: 123,
    meatType: "beef",
    components: ["jeden", "dwa", "trzy"],
  }).save();
  await new Beverage({ name: "Beverage", price: 0 }).save();
  await new Sauce({ name: "Sauce", price: 0 }).save();
};
