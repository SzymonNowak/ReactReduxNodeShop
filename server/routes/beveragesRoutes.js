const express = require("express");
const router = express.Router();

const {
  addBeverage,
  getAllBeverages,
  getBeverage,
  updateBeverage,
  deleteBeverage,
} = require("../controllers/beveragesController.js");

router.get("/single/:id", getBeverage);
router.post("/addBeverage", addBeverage);
router.get("/getAllBeverages", getAllBeverages);
router.put("/updateBeverage", updateBeverage);
router.delete("/deleteBeverage/:id", deleteBeverage);

module.exports = router;
