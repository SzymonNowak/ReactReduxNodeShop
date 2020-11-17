import express from "express";
import mongoose from "mongoose";
import { keys } from "./config/keys.js";
const app = express();
const UserData = mongoose.Schema({
  name: String,
  age: Number,
});

const DUPA = mongoose.model("user", UserData);

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  new DUPA({ name: "John", age: 21 }).save();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
