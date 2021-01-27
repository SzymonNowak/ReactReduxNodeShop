const express = require("express");
const router = express.Router();

const {
  addAddon,
  getAllAddons,
  getAddon,
  updateAddon,
  deleteAddon,
} = require("../controllers/addonController.js");

router.get("/single/:id", getAddon);
router.post("/addAddon", addAddon);
router.get("/getAllAddons", getAllAddons);
router.put("/updateAddon", updateAddon);
router.delete("/deleteAddon/:id", deleteAddon);

module.exports = router;
