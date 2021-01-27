const Order = require("../models/Order");
const DeliveryInfo = require("../models/DeliveryInfo");

const makeOrder = async (req, res) => {
  const delivery = req.body.deliveryInfo;
  const meals = req.body.meals;
  const addons = req.body.addons;
  const beverages = req.body.beverages;
  const sauces = req.body.sauces;
  try {
    const deliveryInfo = await new DeliveryInfo(delivery).save();
    const orderData = {
      delivery: deliveryInfo._id,
      meals: meals,
      beverages: beverages,
      addons: addons,
      sauces: sauces,
    };
    const order = await new Order(orderData).save();
    const fulldescriptionOrder = await Order.find(order._id)
      .populate("delivery")
      .populate("meals")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    res.status(201).json({ fulldescriptionOrder });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

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

module.exports = { makeOrder, getOrder, getAllOrders };
