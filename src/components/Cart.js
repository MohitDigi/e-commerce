import React from "react";
import CartItems from "./CartItems";
import "../Assets/Cart.css"
const Cart = () => {
  return (
    <>
      <div className="container cart-items">
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
    </>
  );
};

export default Cart;
