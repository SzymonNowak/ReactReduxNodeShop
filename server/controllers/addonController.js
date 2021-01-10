import Addon from "../models/Addons.js";

export const addAddon = async (req, res) => {
  const addon = req.body;
  const newAddon = new Addon(addon);
  try {
    await newAddon.save();
    res.status(201).json({ message: "added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateAddon = async (req, res) => {
  const id = req.body.id;
  const { name, price } = req.body.body;
  const addonToUpdate = {
    name,
    price,
  };
  try {
    const updatedAddon = await Addon.findByIdAndUpdate(
      {
        _id: id,
      },
      addonToUpdate,
      { new: true }
    );
    res.status(200).json(updatedAddon);
  } catch (error) {
    res.status(404).json({ message: error.message });
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

export const getAddon = async (req, res) => {
  const id = req.params.id;
  try {
    const addon = await Addon.findById(id);
    res.status(200).json(addon);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
