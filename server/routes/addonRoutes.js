import express from "express";
import {
  addAddon,
  getAllAddons,
  getAddon,
  updateAddon,
} from "../controllers/addonController.js";
const router = express.Router();

router.get("/single/:id", getAddon);
router.post("/addAddon", addAddon);
router.get("/getAllAddons", getAllAddons);
router.put("/updateAddon", updateAddon);

export default router;
