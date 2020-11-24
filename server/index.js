import express from "express";
import mongoose from "mongoose";
import { keys } from "./config/keys.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`app runing on ${PORT}`)))
  .catch((error) => console.log(error));
