import express from "express";
import { addAddon, getAllAddons } from "../controllers/addonController.js";
const router = express.Router();

router.post("/addAddon", addAddon);
router.get("/getAllAddons", getAllAddons);

export default router;
