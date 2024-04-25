import mongoose from "mongoose";

const { Schema, model } = mongoose;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
    },
    contents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

export default Course;
