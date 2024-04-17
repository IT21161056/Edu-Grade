import express from "express";
const router = express.Router();
import {
  addCourse,
  getCourses,
  removeCourse,
} from "../controllers/course.controller.js";

router.post("/", addCourse);
router.get("/", getCourses);
router.delete("/:id", removeCourse);

export default router;
