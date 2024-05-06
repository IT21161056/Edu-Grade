import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import Stripe from "stripe";

const app = express();

const PORT = process.env.PORT || 9000;
connectDB();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Proxy is working 👌" });
// });

const stripe = new Stripe(process.env.SECRET_KEY);

app.post("/checkout", async (req, res) => {
  console.log(req.body.items);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost/3000",
    cancel_url: "http://localhost/3000/view-course",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(PORT, () => {
  console.log(`Node server listening at PORT ${PORT}`);
});
