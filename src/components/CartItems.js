import React from "react";
import cartImage from "../image/cat-11.png"

const CartItems = () => {
  return (
    <>
      <div className="card" >
        <img src={cartImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Peach</h5>
          <p className="card-text">
            14 items
          </p>
          <a href="#" className="btn btn-success">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default CartItems;
