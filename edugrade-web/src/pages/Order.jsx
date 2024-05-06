import React, { useState } from "react";

const Order = ({ handleOrderSubmit }) => {
  const [orderDetails, setOrderDetails] = useState({
    description: "",
    cost: 0,
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderSubmit(orderDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={orderDetails.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Cost:
        <input
          type="number"
          name="cost"
          value={orderDetails.cost}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Proceed to PayPal</button>
    </form>
  );
};

export default Order;
