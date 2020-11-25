import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  await new User({ name: "user", age: 6666 }).save();
};
