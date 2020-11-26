import Sauce from "../models/Sauce.js";

export const addSauce = async (req, res) => {
  await new Sauce({ name: "Sauce", price: 0 }).save();
};

export const getAllSauces = async (req, res) => {
  try {
    const allSauces = await Sauce.find();
    res.status(200).json({ sauces: allSauces });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
