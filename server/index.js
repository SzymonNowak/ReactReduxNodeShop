const express = require("express");
const mongoose = require("mongoose");
const { keys } = require("./config/keys");
const io = require("socket.io");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mealsRoutes = require("./routes/mealsRoutes");
const sauceRoutes = require("./routes/sauceRoutes");
const ordersRoutes = require("./routes/orderRoutes");
const beveragesRoutes = require("./routes/beveragesRoutes");
const addonRoutes = require("./routes/addonRoutes");

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: true }));
app.use("/addons", addonRoutes);
app.use("/beverages", beveragesRoutes);
app.use("/meals", mealsRoutes);
app.use("/sauces", sauceRoutes);
app.use("/orders", ordersRoutes);

mongoose.set("useFindAndModify", false);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`app runing on ${PORT}`)))
  .catch((error) => console.log(error));
