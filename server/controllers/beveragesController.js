import Beverage from "../models/Beverages.js";

export const addBeverage = async (req, res) => {
  await new Beverage({ name: "Beverage", price: 0 }).save();
};

export const getAllBeverages = async (req, res) => {
  try {
    const allBeverages = await Beverage.find();
    res.status(200).json(allBeverages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
