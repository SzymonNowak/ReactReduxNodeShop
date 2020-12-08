import Addon from "../models/Addons.js";

export const addAddon = async (req, res) => {
  const addon = req.body;
  const newAddon = new Addon(addon);
  try {
    await newAddon.save();
    res.status(201).json(newAddon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllAddons = async (req, res) => {
  try {
    const allAddons = await Addon.find();
    res.status(200).json({ addons: allAddons });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
