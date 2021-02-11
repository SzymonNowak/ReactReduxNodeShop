const express = require("express");
const router = express.Router();

const {
  makeOrder,
  getAllOrders,
  getOrder,
  finishOrder,
  getAllNotFinishedOrders,
} = require("../controllers/orderController.js");

router.post("/makeOrder", makeOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrders", getOrder);
router.post("/finishOrder/:id", finishOrder);
router.get("/getAllNotFinishedOrders", getAllNotFinishedOrders);

module.exports = router;
