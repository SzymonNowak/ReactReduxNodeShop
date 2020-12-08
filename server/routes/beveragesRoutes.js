import express from "express";
import {
  addBeverage,
  getAllBeverages,
} from "../controllers/beveragesController.js";
const router = express.Router();

router.post("/addBeverage", addBeverage);
router.get("/getAllBeverages", getAllBeverages);

export default router;
