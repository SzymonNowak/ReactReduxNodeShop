import Order from "../models/Order.js";

export const acceptOrder = async (req, res) => {
  await new Order({
    name: "szymon",
    secoundName: "nowak",
    street: "test",
    homeNumber: 16,
    phoneNumber: "795051297",
    status: "0",
    orderType: "odbior",
    payMethod: "gotowka",
  }).save();
};

export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json({ Orders: allOrders });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
