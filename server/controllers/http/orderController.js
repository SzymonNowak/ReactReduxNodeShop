const Order = require("../../models/Order");

const getOrder = async (req, res) => {
  const _id = req.id;
  try {
    const fulldescriptionOrder = await Order.find(_id)
      .populate("delivery")
      .populate("meals")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    res.status(201).json(fulldescriptionOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const fulldescriptionOrder = await Order.find()
      .populate("delivery")
      .populate("meals")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    res.status(201).json(fulldescriptionOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getAllNotFinishedOrders = async (req, res) => {
  try {
    const fulldescriptionOrder = await Order.find({ done: false })
      .populate("delivery")
      .populate("meals")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    res.status(201).json(fulldescriptionOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const finishOrder = async (req, res) => {
  const id = req.body.id;
  await Order.findByIdAndUpdate({ _id: id }, { done: true });
  try {
    res.status(201).json("finished");
  } catch (error) {}
};

module.exports = {
  getOrder,
  getAllOrders,
  finishOrder,
  getAllNotFinishedOrders,
};
