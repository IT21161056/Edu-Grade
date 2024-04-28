import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

//routes
import paymentRoutes from "./routes/payment.route.js";

const app = express();
const PORT = process.env.PORT || 3005;

//connect to the mongoDB
connectDB();

app.use(logger);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "proxy is working 👌" });
});

app.use("/", paymentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});