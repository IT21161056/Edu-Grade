import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

//routes
import courseRoutes from "./routes/course.routes.js";
import contentRoutes from "./routes/content.routes.js";

const app = express();
const PORT = process.env.PORT || 3011;

//connect to the mongoDB
connectDB();

app.use(logger);

app.use(cors());

app.use(express.json());

app.use("/v2", contentRoutes);
app.use("/v1", courseRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
