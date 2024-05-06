import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Order = ({ onSubmit }) => {
  const [orderDetails, setOrderDetails] = useState({
    description: "",
    cost: 0,
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderDetails);
  };

  return (
    <Card className="p-6">
      <Typography variant="h5" className="mb-4">
        Place Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="text"
            name="description"
            value={orderDetails.description}
            onChange={handleChange}
            label="Description"
          />
        </div>
        <div className="mb-4">
          <Input
            type="number"
            name="cost"
            value={orderDetails.cost}
            onChange={handleChange}
            label="Cost"
          />
        </div>
        <Button type="submit" className="w-full">
          Proceed to PayPal
        </Button>
      </form>
    </Card>
  );
};

export default Order;
