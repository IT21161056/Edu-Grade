import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import { logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3010;

//connect to the mongoDB
connectDB();

app.use(logger);

app.use(express.json());

app.get("/:id", (req, res) => {
  res.json({ name: "anoj", age: 24, email: "anoj@gamil.com" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
