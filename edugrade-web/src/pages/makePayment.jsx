import { Button } from "@material-tailwind/react";

const products = [
  {
    id: "price_1PDMKzRrpMRVze6GAcsA43vB",
    title: "Course SE",
    price: 10,
  },
];

const checkout = async () => {
  await fetch("http://localhost:8000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: products }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.url) {
        window.location.assign(res.url);
      }
    });
};

const MakePayment = () => {
  return (
    <div>
      <Button onClick={checkout}>Purchase</Button>
    </div>
  );
};

export default MakePayment;
