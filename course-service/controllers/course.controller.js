import { tryCatch } from "../utils/tryCatchWrapper.js";
import { CustomError } from "../exceptions/baseException.js";
import Course from "../models/course.model.js";

const addCourse = tryCatch(async (req, res) => {
  const { courseName, courseDescription } = req.body;

  if (!courseName) throw new CustomError("Name is required.", 500);

  const newCourse = await Course.create({
    courseName,
    courseDescription,
  });

  if (!newCourse) throw new CustomError("Course creation failed.", 500);

  res.status(200).json(newCourse);
});

const getCourses = tryCatch(async (_, res) => {
  const courses = await Course.find().populate('contents');
  
  res.status(200).json(courses);
});

const removeCourse = tryCatch(async (req, res) => {
  const { id } = req.params;

  const courses = await Course.findByIdAndDelete(id);

  res.status(200).json(courses);
});

const getCourseById = tryCatch(async (req, res) => {
  const id = req.params.id;
  console.log("prams", id);

  const course = await Course.findOne({ _id: id }).populate('contents');
  console.log("course", course);

  // if (!course) throw new CustomError("Course Not foundaaca.", 404);

  res.status(200).json(course);
});

export { addCourse, getCourses, removeCourse, getCourseById };
