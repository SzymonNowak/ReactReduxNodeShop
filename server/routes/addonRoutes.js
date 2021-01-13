import express from "express";
import {
  addAddon,
  getAllAddons,
  getAddon,
  updateAddon,
  deleteAddon,
} from "../controllers/addonController.js";
const router = express.Router();

router.get("/single/:id", getAddon);
router.post("/addAddon", addAddon);
router.get("/getAllAddons", getAllAddons);
router.put("/updateAddon", updateAddon);
router.delete("/deleteAddon/:id", deleteAddon);

export default router;
