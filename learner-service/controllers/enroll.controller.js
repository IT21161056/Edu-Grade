import Enrollment from "../models/enrollmentModel.js"
import { SendEmail, SendSms } from "./notification.controller.js";

export const enrollToCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const { userId, userEmail, userMobile } = req.body;

        // Check if user is already enrolled
        const enrollUser = await Enrollment.findOne({ userId: userId });

        if (enrollUser) {
            // User is already enrolled, check if they're enrolled in this course
            if (enrollUser.enrolledCourses.includes(courseId)) {
                return res.status(403).json({ message: "You have already enrolled in this course" });
            } else {
                enrollUser.enrolledCourses.push(courseId);
                await enrollUser.save();

                SendEmail(enrollUser.userEmail) //send email notification
                SendSms(enrollUser.userMobile) //send sms notification

                return res.status(200).json({ message: "You successfully enrolled in this course" });
            }
        } else {
            const enrolledUser = await Enrollment.create({ userId: userId, userEmail, userMobile, enrolledCourses: [courseId] });
            SendEmail(enrolledUser.userEmail)
            SendSms(enrolledUser.userMobile)

            return res.status(201).json({ message: "You successfully enrolled in this course", enrolledUser });
        }

    } catch (error) {
        console.error("Error enrolling user:", error);
        return res.status(500).json({ message: "Failed to enroll user" });
    }
};



export const unEnrollFromCourse = async (req, res) => {

    try {
        const { userId, courseId } = req.body

        const enrollUser = await Enrollment.findOne({ userId: userId });
        if (enrollUser) {

            const index = enrollUser.enrolledCourses.indexOf(courseId)//get the index of where courseId located

            if (index == -1) {
                return res.status(500).json({ message: "Course not enroll for this user" });
            }
            enrollUser.enrolledCourses.splice(index, 1); //remove course id from array
            await enrollUser.save()
            return res.status(500).json({ message: "Course enrollment removed from user successfully" });
        }

    } catch (error) {
        console.error("Error enrolling user:", error)
        return res.status(403).json({ message: "Failed to un enroll" })
    }
}