import mongoose from "mongoose";

const { Schema, model } = mongoose;

const enrollmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Enrollment", enrollmentSchema);
