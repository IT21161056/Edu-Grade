import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPal from "./PayPal.jsx";
import PAYPAL_API_KEY from "../paypal_api/PaypalAPI.js";
import Order from "./Order.jsx";
import { useState } from "react";

const MakePayment = () => {
  const initialOptions = {
    clientId: PAYPAL_API_KEY,
    currency: "USD",
    intent: "capture",
  };

  const [orderDetails, setOrderDetails] = useState({});

  const handleOrderSubmit = (details) => {
    setOrderDetails(details);
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Order onSubmit={handleOrderSubmit} />
      {orderDetails.description && orderDetails.cost && (
        <PayPal orderDetails={orderDetails} />
      )}
    </PayPalScriptProvider>
  );
};

export default MakePayment;
