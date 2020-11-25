import Beverage from "../models/Beverages.js";

export const addBeverage = async (req, res) => {
  await new Beverage({ name: "Beverage", price: 0 }).save();
};
