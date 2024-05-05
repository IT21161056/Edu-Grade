import express from "express";
import { addCompletion } from "../controllers/courseCompletion.controller";
const router = express.Router();

router.post("/", addCompletion);

export default router;
