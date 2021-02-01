const Order = require("../models/Order");
const DeliveryInfo = require("../models/DeliveryInfo");
module.exports = function (io) {
  io.on("connect", (socket) => {
    test(io, socket);
  });
};

const test = (io, socket) => {
  socket.on("test", async (data) => {
    const fullOrder = await makeOrder(data);
    io.to(socket.id).emit("test", fullOrder);
  });
};

const makeOrder = async (data) => {
  const delivery = data.order.deliveryInfo;
  const meals = data.order.meals;
  const addons = data.order.addons;
  const beverages = data.order.beverages;
  const sauces = data.order.sauces;
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
    return fulldescriptionOrder;
  } catch (error) {
    return error;
  }
};
