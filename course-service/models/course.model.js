import mongoose from "mongoose";

const { Schema, model } = mongoose;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    description: {
      type: String,
    },
  },
  {
    contents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
  },
  {
    timestamps: true,
  }
);
const Course = model("Course", courseSchema);

export default Course;
