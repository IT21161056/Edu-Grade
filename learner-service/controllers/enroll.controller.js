import Enrollment from "../models/enrollmentModel.js"


export const enrollToCourse = async(req,res) => {

    const courseId = req.params.id;
    const {userId} = req.body

    const enrollUser = await Enrollment.findById(courseId);

    if(enrollUser){
        if(enrollUser.enrolledCourses.includes(userId)){
            return res.status(200).json({message:"You have already enrolled in this course"})
        }else{
            enrollUser.enrolledCourses.push(courseId)
        }
    }else{
        const enrolledUser = await Enrollment.create({userId:userId,enrolledCourses:courseId})
        return res.status(200).json({message:"You successfully enrolled in this course",enrolledUser})
    }
}