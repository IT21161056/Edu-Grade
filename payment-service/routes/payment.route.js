import express from "express";
import { makePayment } from "../controllers/paymentController.js";
import { savePayment } from "../controllers/coursePaymentController.js";
const router = express.Router();

router.post("/", makePayment);
router.post("/save",savePayment)

export default router;
