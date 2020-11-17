import mongoose from "mongoose";

const UserData = mongoose.Schema({
  name: String,
  age: Number,
});

export const user = mongoose.model("user", UserData);
