import Sauce from "../models/Sauce.js";

export const addSauce = async (req, res) => {
  const sauce = req.body;
  const newSauce = new Sauce(sauce);
  try {
    await newSauce.save();
    res.status(201).json(newSauce);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllSauces = async (req, res) => {
  try {
    const allSauces = await Sauce.find();
    res.status(200).json({ sauces: allSauces });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSauce = async (req, res) => {
  const id = req.params.id;
  try {
    const sauce = await Sauce.findById(id);
    res.status(200).json({ sauces: sauce });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
