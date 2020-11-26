import Addon from "../models/Addons.js";

export const addAddon = async (req, res) => {
  await new Addon({ name: "addon", price: 18 }).save();
};

export const getAllAddons = async (req, res) => {
  try {
    const allAddons = await Addon.find();
    res.status(200).json(allAddons);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
