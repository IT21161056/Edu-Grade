import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import Stripe from "stripe";

const app = express();

const PORT = process.env.PORT || 9000;
connectDB();

const stripe = new Stripe(process.env.SECRET_KEY);

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Proxy is working 👌" });
});

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const checkoutItems = req.body.items;
  let lineItems = [];
  checkoutItems.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.Checkout.sessions.create({
    lineItems: lineItems,
    mode: PaymentMethodChangeEvent,
    success_url: "http://localhost/3000",
    cancel_url: "http://localhost/300/order",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
