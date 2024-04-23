import mongoose from "mongoose";

const { Schema, model } = mongoose;


const enrollmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userEmail:{
        type:String
    },
    userMobile:{
        type:String
    },
    enrolledCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
    }],
})

export default model("Enrollment",enrollmentSchema);