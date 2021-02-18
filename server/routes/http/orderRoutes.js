const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  getOrder,
  finishOrder,
  getAllNotFinishedOrders,
} = require("../../controllers/http/orderController.js");

router.get("/getAllOrders", getAllOrders);
router.get("/getOrders", getOrder);
router.post("/finishOrder/:id", finishOrder);
router.get("/getAllNotFinishedOrders", getAllNotFinishedOrders);

module.exports = router;
