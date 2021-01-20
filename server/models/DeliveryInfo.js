import mongoose from "mongoose";

const DeliveryInfoSchema = mongoose.Schema({
  Name: String,
  Surname: String,
  PhoneNumber: Number,
  Street: String,
  StreetNumber: String,
  FlatNumber: Number,
  floor: Number,
  payMethod: String,
});

const DeliveryInfo = mongoose.model("DeliveryInfo", DeliveryInfoSchema);
export default DeliveryInfo;
