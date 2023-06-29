import React from "react";
import CartItems from "./CartItems";
import "../Assets/Cart.css"
const Cart = () => {
  return (
    <>
      <div className="cart-items" style={{padding:"1.3rem"}}>
        <CartItems />
        <CartItems />
        <CartItems />
        
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
    </>
  );
};

export default Cart;
