const DeliveryInfo = require("../../models/DeliveryInfo");
const Order = require("../../models/Order");

const makeOrder = async (data) => {
  const delivery = data.order.deliveryInfo;
  const meals = data.order.meals;
  const addons = data.order.addons;
  const beverages = data.order.beverages;
  const sauces = data.order.sauces;
  const clientId = data.order.clientId;

  try {
    const deliveryInfo = await new DeliveryInfo(delivery).save();
    const orderData = {
      delivery: deliveryInfo._id,
      meals: meals,
      beverages: beverages,
      addons: addons,
      sauces: sauces,
      clientId: clientId,
    };
    const order = await new Order(orderData).save();
    const fulldescriptionOrder = await Order.find(order._id)
      .populate("delivery")
      .populate("meals")
      .populate("beverages")
      .populate("addons")
      .populate("sauces");
    return fulldescriptionOrder;
  } catch (error) {
    return error;
  }
};

module.exports = { makeOrder };
