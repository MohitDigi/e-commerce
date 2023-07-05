import React from "react";
import cartImage from "../image/cat-11.png"

const CartItems = () => {
  return (
    <>
      <div class="card" >
        <img src={cartImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Peach</h5>
          <p class="card-text">
            14 items
          </p>
          <a href="#" class="btn btn-success">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default CartItems;
