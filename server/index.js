const express = require("express");
const mongoose = require("mongoose");
const { keys } = require("./config/keys");
const cors = require("cors");
const bodyParser = require("body-parser");
const mealsRoutes = require("./routes/http/mealsRoutes");
const sauceRoutes = require("./routes/http/sauceRoutes");
const ordersRoutes = require("./routes/http/orderRoutes");
const beveragesRoutes = require("./routes/http/beveragesRoutes");
const addonRoutes = require("./routes/http/addonRoutes");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const io = require("socket.io")(
  app.listen(PORT, () => console.log(`app runing on ${PORT}`)),
  {
    cors: {
      origin: "*",
    },
  }
);

require("./routes/socket/socketRoutes")(io);

mongoose.set("useFindAndModify", false);
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.log(error));

app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: true }));
app.use("/addons", addonRoutes);
app.use("/beverages", beveragesRoutes);
app.use("/meals", mealsRoutes);
app.use("/sauces", sauceRoutes);
app.use("/orders", ordersRoutes);
