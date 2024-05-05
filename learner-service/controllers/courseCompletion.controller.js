import { tryCatch } from "../utils/tryCatchWrapper";
import ContentCompletion from "../models/complete.model";
import { CustomError } from "../exceptions/baseException";

const addCompletion = tryCatch(async (req, res) => {
  const { userId, courseId, contentID } = req.body;

  if (!userId || !courseId || !contentID)
    throw new CustomError("Fields are required!", 500);

  const complete = await ContentCompletion.create({
    userId,
    courseId,
    contentID,
  });

  if (!complete) throw new CustomError("Content completion Failed!", 500);

  res.status(200).json(complete);
});

export { addCompletion };
