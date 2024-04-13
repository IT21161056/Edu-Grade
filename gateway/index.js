import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import rootRoute from "./routes/root.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/", express.static(join(__dirname, "public")));

app.use("/", rootRoute);

//main routes
app.use("/user", proxy("http://localhost:8001"));

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

app.use("/user/:id", proxy("http://localhost:8001"));
// app.use("/shopping", proxy("http://localhost:8003"));
// app.use("/", proxy("http://localhost:8002")); // products

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
