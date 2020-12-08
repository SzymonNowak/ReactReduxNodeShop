import Beverage from "../models/Beverages.js";

export const addBeverage = async (req, res) => {
  await new Beverage({ name: "Beverage", price: 0 }).save();
  const beverage = req.body;
  const newBeverage = new Beverage(beverage);
  try {
    await newBeverage.save();
    res.status(201).json(newBeverage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllBeverages = async (req, res) => {
  try {
    const allBeverages = await Beverage.find();
    res.status(200).json({ beverages: allBeverages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
