import express from "express";
import mongoose from "mongoose";
import { keys } from "./config/keys.js";
import userRoutes from "./routes/userRoutes.js";
import addonRoutes from "./routes/addonRoutes.js";
import beveragesRoutes from "./routes/beveragesRoutes.js";
import mealsRoutes from "./routes/mealsRoutes.js";
import sauceRoutes from "./routes/sauceRoutes.js";
import productsInCart from "./routes/productsInCart.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/user", userRoutes);
app.use("/addons", addonRoutes);
app.use("/beverages", beveragesRoutes);
app.use("/meals", mealsRoutes);
app.use("/sauces", sauceRoutes);
app.use("/productsInCart", productsInCart);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`app runing on ${PORT}`)))
  .catch((error) => console.log(error));
