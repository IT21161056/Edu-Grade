import express from "express";
import { enrollToCourse, unEnrollFromCourse } from "../controllers/enroll.controller.js";
const router = express.Router();

router.post("/enroll/:id",enrollToCourse)
router.patch("/unEnroll",unEnrollFromCourse)

export default router