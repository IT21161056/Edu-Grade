import express from "express";
import { enrollToCourse } from "../controllers/enroll.controller.js";
const router = express.Router();

router.post("/enroll/:id",enrollToCourse)

export default router