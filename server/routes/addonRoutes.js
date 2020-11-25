import express from "express";
import { addAddon } from "../controllers/addonController.js";
const router = express.Router();

router.get("/addAddon", addAddon);

export default router;
