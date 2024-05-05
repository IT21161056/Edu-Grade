import express from "express";
const router = express.Router();
import {
  addCourse,
  getCourses,
  removeCourse,
  getCourseById,
} from "../controllers/course.controller.js";

router.post("/", addCourse);
router.get("/", getCourses);
router.delete("/:id", removeCourse);
router.get("/:id", getCourseById);

export default router;
