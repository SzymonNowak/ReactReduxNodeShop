const Order = require("../models/Order");
const DeliveryInfo = require("../models/DeliveryInfo");
module.exports = function (io) {
  io.on("connect", (socket) => {
    makeOrderHandler(io, socket);
    updateOrderStatus(io, socket);
  });
};

const makeOrderHandler = (io, socket) => {
  socket.on("makeOrder", async (data) => {
    const clientOrder = {
      fullOrder: await makeOrder(data),
      clientId: socket.id,
    };
    io.to(socket.id).emit("saveOrder", clientOrder);
  });
};
const updateOrderStatus = (io, socket) => {
  socket.on("updateOrderStatus", (data) => {
    const orderStatus = {
      time: data.time,
      status: data.orderStatus,
    };
    console.log(data);
    io.to(data.socketId).emit("orderStatus", orderStatus);
  });
};

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
