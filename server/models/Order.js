import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryInfo" },
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meals" }],
  beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Beverages" }],
  addons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Addons" }],
  sauces: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sauces" }],
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "ProductsInCart" },
  done: { type: Boolean, default: false },
  data: { type: Date, default: Date.now() },
});

const Order = mongoose.model("Orders", OrderSchema);
export default Order;
