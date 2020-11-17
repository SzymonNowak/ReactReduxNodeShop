import mongoose from "mongoose";

const UserData = mongoose.Schema({
  name: String,
  age: Number,
});

const UserData = mongoose.model("user", UserData);

new UserData({ name: "John", age: 21 }).save();
