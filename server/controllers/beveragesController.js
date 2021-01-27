const Beverage = require("../models/Beverages");

const addBeverage = async (req, res) => {
  const beverage = req.body;
  const newBeverage = new Beverage(beverage);
  try {
    await newBeverage.save();
    res.status(201).json({ message: "added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllBeverages = async (req, res) => {
  try {
    const allBeverages = await Beverage.find();
    res.status(200).json({ beverages: allBeverages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getBeverage = async (req, res) => {
  const id = req.params.id;
  try {
    const beverage = await Beverage.findById(id);
    res.status(200).json(beverage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateBeverage = async (req, res) => {
  const id = req.body.id;
  const { name, price } = req.body.body;
  const beverageToUpdate = {
    name,
    price,
  };
  try {
    const updatedBeverage = await Beverage.findByIdAndUpdate(
      {
        _id: id,
      },
      beverageToUpdate,
      { new: true }
    );
    res.status(200).json(updatedBeverage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteBeverage = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBeverage = await Beverage.findOneAndDelete({
      _id: id,
    });
    res.status(201).json(deletedBeverage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = {
  addBeverage,
  getAllBeverages,
  getBeverage,
  updateBeverage,
  deleteBeverage,
};
