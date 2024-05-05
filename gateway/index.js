import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import rootRoute from "./routes/root.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { protect } from "./middleware/authMiddleware.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/", express.static(join(__dirname, "public")));

app.use("/", rootRoute);
//main routes
// app.use(protect);

// app.use("/api/user/", proxy("http://user_service:8001"));
app.use("/api/user/", proxy("http://localhost:8001"));
app.use("/api/course/", proxy("http://localhost:8003"));
// app.use("/api/learner-service/", proxy("http://localhost:8004"));

//out side routes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Fund");
  }
});

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
