import express from "express";
import mongoose from "mongoose";
import { keys } from "./config/keys.js";
import { user } from "./models/test.js";
const app = express();

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  new user({ name: "John", age: 6666 }).save();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
