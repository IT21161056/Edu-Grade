import mongoose from "mongoose";

const { Schema, model } = mongoose;

const coursePayment = new Schema(
  {
    courseId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
  },
  { timestamps: true }
);

const CoursePayment = model("CoursePayment", coursePayment);
export default CoursePayment;
