import mongoose from "mongoose";

const DeliveryInfoSchema = mongoose.Schema({
  Name: String,
  SurName: String,
  PhoneNumber: String,
  Street: String,
  StreetNumber: String,
  FlatNumber: String,
  floor: String,
  payMethod: String,
});

const DeliveryInfo = mongoose.model("DeliveryInfo", DeliveryInfoSchema);
export default DeliveryInfo;
