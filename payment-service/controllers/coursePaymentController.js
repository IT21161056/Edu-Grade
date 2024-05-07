import { CustomError } from "../../gateway/exceptions/baseException.js";
import CoursePayment from "../models/coursePayementModel.js";
import { tryCatch } from "../utils/tryCatchWrapper.js";

const savePayment = tryCatch(async (req, res) => {

    const { courseId, userId, amount } = req.body

    if (!courseId || !userId || !amount) {
        throw new CustomError("All fields are required", 404);
    }

    const payment = await CoursePayment.create({
        courseId,
        userId,
        amount
    })

    return res.status(200).json({ message: "Payment details saved Successfully", payment });

})

export { savePayment }