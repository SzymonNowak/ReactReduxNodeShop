import express from "express";
import {
  addBeverage,
  getAllBeverages,
  getBeverage,
  updateBeverage,
} from "../controllers/beveragesController.js";
const router = express.Router();

router.get("/single/:id", getBeverage);
router.post("/addBeverage", addBeverage);
router.get("/getAllBeverages", getAllBeverages);
router.put("/updateBeverage", updateBeverage);

export default router;
