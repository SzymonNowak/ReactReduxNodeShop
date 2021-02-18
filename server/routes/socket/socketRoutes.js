const { makeOrder } = require("../../controllers/socket/makeOrder");
const { socketRoutes } = require("../pathNames");
module.exports = function (io) {
  io.on("connect", (socket) => {
    makeOrderHandler(io, socket);
    updateOrderStatus(io, socket);
  });
};

const makeOrderHandler = (io, socket) => {
  socket.on(socketRoutes.makeOrder, async (data) => {
    const clientOrder = {
      fullOrder: await makeOrder(data),
      clientId: socket.id,
    };
    io.to(socket.id).emit(socketRoutes.saveOrder, clientOrder);
  });
};

const updateOrderStatus = (io, socket) => {
  socket.on(socketRoutes.updateOrderStatus, (data) => {
    const orderStatus = {
      time: data.time,
      status: data.orderStatus,
    };
    io.to(data.socketId).emit(socketRoutes.orderStatus, orderStatus);
  });
};
