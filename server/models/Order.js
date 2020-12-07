import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  name: String,
  secoundName: String,
  street: String,
  homeNumber: Number,
  phoneNumber: String,
  status: Boolean,
  orderType: String,
  payMethod: String,
  order: [{ type: Schema.Types.ObjectId, ref: "ProductsInCart" }],
});

const Order = mongoose.model("Orders", OrderSchema);
export default Order;
