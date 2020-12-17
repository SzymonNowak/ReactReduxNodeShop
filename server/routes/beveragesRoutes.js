import express from "express";
import {
  addBeverage,
  getAllBeverages,
  getBeverage,
} from "../controllers/beveragesController.js";
const router = express.Router();

router.get("/single/:id", getBeverage);
router.post("/addBeverage", addBeverage);
router.get("/getAllBeverages", getAllBeverages);

export default router;
