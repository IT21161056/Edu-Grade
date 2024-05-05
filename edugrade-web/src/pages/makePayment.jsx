import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPal from "./PayPal";
import PAYPAL_API_KEY from "../paypal_api/PaypalAPI.js";

const makePayment = () => {
  const initialOptions = {
    clientId: PAYPAL_API_KEY,
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPal />
    </PayPalScriptProvider>
  );
};

export default makePayment;
