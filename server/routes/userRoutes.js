import express from "express";
import { getAllUsers, addUser } from "../controllers/user.js";
const router = express.Router();

router.get("/all", getAllUsers);
router.get("/new", addUser);

export default router;
