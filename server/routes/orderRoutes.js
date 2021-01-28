const express = require("express");
const router = express.Router();

const {
  makeOrder,
  getAllOrders,
  getOrder,
  getAllNotFinishedOrders,
} = require("../controllers/orderController.js");

router.post("/makeOrder", makeOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrders", getOrder);
router.get("/getAllNotFinishedOrders", getAllNotFinishedOrders);

module.exports = router;
