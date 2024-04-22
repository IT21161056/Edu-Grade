import { tryCatch } from "../utils/tryCatchWrapper.js";
import { CustomError } from "../exceptions/baseException.js";
import Course from "../models/course.model.js";

const addCourse = tryCatch(async (req, res) => {
  const { name, description } = req.body;

  if (!name) throw new CustomError("Name is required.", 500);

  const newCourse = await Course.create({ name, description });

  if (!newCourse) throw new CustomError("Course creation failed.", 500);

  res.status(200).json(newCourse);
});

const getCourses = tryCatch(async (_, res) => {
  const courses = await Course.find();

  res.status(200).json(courses);
});

const removeCourse = tryCatch(async (req, res) => {
  const { id } = req.params;

  const courses = await Course.findByIdAndDelete(id);

  res.status(200).json(courses);
});

export { addCourse, getCourses, removeCourse };
