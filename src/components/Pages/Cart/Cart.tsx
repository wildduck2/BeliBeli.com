import React from "react";
import { Button } from "@/components/UI";

const Cart = () => {
  return (
    <section className="cart">
      <div>
        <p>Your shopping bag is empty.</p>
        <Button variant="default">Go shopping</Button>
      </div>
    </section>
  );
};

export default Cart;
