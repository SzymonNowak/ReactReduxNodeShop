import Addon from "../models/Addons.js";

export const addAddon = async (req, res) => {
  await new Addon({ name: "addon", price: 18 }).save();
};
