import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);
export default User;
