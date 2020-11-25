import Sauce from "../models/Sauce.js";

export const addSauce = async (req, res) => {
  await new Sauce({ name: "Sauce", price: 0 }).save();
};
