const express = require("express");
const router = express.Router();

const {
  addSauce,
  getAllSauces,
  getSauce,
  updateSauce,
  deleteSauce,
} = require("../controllers/sauceController.js");

router.get("/single/:id", getSauce);
router.post("/addSauce", addSauce);
router.get("/getAllSauces", getAllSauces);
router.put("/updateSauce", updateSauce);
router.delete("/deleteSauce/:id", deleteSauce);
module.exports = router;
