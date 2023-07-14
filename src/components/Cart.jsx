import React from "react";
import houseIcon from "../icon/house-door.svg";
import "../Assets/Cart/Cart.css";
import RatingComp from "./Rating";
const Cart = () => {
  return (
    <>
      <header>
        <nav className="route-header container-fluid">
          <a href="/">
            <img src={houseIcon} alt="home" style={{ marginRight: "4px" }} />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Shop</a>
          <span>Cart</span>
        </nav>
      </header>
      <main className="cart-main my-5">
        <div className="main-body">
          <div className="cart-headline">
            <h1 className="cart-heading ">Your Cart</h1>
          </div>
          <div className="cart-wrapper">
            <div className="cart-main-container left-container">
              <div className="cart-subheadline">
                <h6 className="text-body">
                  There are <span className="text-brand">3</span> products in
                  your cart
                </h6>
                <h6 className="text-body trash">
                  <a href="#" className="text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    Clear Cart
                  </a>
                </h6>
              </div>
              <div className="shopping-summery">
                <table className="table-wishlist">
                  <thead>
                    <tr className="main-heading">
                      <th className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox11"
                        ></label>
                      </th>
                      <th scope="col" colspan="2">
                        Product
                      </th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col" className="end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="custom-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox1"
                        ></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name text-heading" href="">
                            Field Roast Chao Cheese Creamy Original
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate">
                            <RatingComp style={{ width: "90%" }} />
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="Unit Price">
                        <h4 className="text-body">$2.51 </h4>
                      </td>
                      <td
                        className="text-center detail-info"
                        data-title="Stock"
                      >
                        <div className="detail-extralink">
                          <div className="detail-qty">
                            <input type="number" className="qty-val" value={1} min={1} max={100}/>
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="SubTotal">
                        <h4 className="text-brand">$2.51 </h4>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a href="#" className="text-body">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custom-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox2"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox2"
                        ></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a
                            className="product-name text-heading"
                            href="shop-product-right.html"
                          >
                            Blue Diamond Almonds Lightly Salted
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate">
                            <RatingComp style={{ width: "90%" }} />
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h4 className="text-body">$3.2 </h4>
                      </td>
                      <td
                        className="text-center detail-info"
                        data-title="Stock"
                      >
                        
                        <div className="detail-extralink">
                          <div className="detail-qty">
                            <input type="number" className="qty-val" value={1} min={1} max={100}/>
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h4 className="text-brand">$3.2 </h4>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a href="#" className="text-body">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="custom-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox3"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox3"
                        ></label>
                      </td>
                      <td className="image product-thumbnail">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                          alt="#"
                        />
                      </td>
                      <td className="product-des product-name">
                        <h6>
                          <a className="product-name text-heading" href="">
                            Fresh Organic Mustard Leaves Bell Pepper
                          </a>
                        </h6>
                        <div className="product-rate-cover">
                          <div className="product-rate">
                            <RatingComp style={{ width: "90%" }} />
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h4 className="text-body">$2.43 </h4>
                      </td>
                      <td
                        className="text-center detail-info"
                        data-title="Stock"
                      >
                        
                        <div className="detail-extralink">
                          <div className="detail-qty">
                            <input type="number" className="qty-val" value={1} min={1} max={100}/>
                          </div>
                        </div>
                      </td>
                      <td className="price" data-title="Price">
                        <h4 className="text-brand">$2.43 </h4>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a href="#" className="text-body">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="divider" />
                <div className="cart-action">
                  <a className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>{" "}
                    Continue Shopping
                  </a>
                  <a className="btn ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>{" "}
                    Update Cart
                  </a>
                </div>
                <div className="bottom-content">
                  <div className="calculate-shiping">
                    <h4>Calculate Shipping</h4>
                    <p>
                      <span className="text-muted">Flat rate:</span>
                      <strong className="text-brand">5%</strong>
                    </p>
                    <form className="custom_select">
                      <select>
                        <option>Select Country</option>
                        <option>United Kingdom</option>
                        <option>Aland Islands</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                      </select>
                      <div className="shippng-form">
                        <input
                          required="required"
                          placeholder="State / Country"
                          name="name"
                          type="text"
                        />
                        <input
                          required="required"
                          placeholder="PostCode / ZIP"
                          name="name"
                          type="text"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="coupon-section">
                    <h4>Apply Coupon</h4>
                    <p className="text-muted">Using A Promo Code?</p>
                    <form action="#">
                      <input name="Coupon" placeholder="Enter Your Coupon" />
                      <button className="btn">Apply</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-totals right-container">
              <table>
                <tbody>
                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Subtotal</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h4 className="text-brand text-end">$12.31</h4>
                    </td>
                  </tr>
                  <tr>
                    <td scope="col" colspan="2">
                      <div className="divider"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Shipping</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h5 className="text-heading ">Free</h5>
                    </td>{" "}
                  </tr>{" "}
                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Estimate for</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h5 className="text-heading ">United Kingdom</h5>
                    </td>{" "}
                  </tr>{" "}
                  <tr>
                    <td scope="col" colspan="2">
                      <div className="divider"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Total</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h4 className="text-brand text-end">$12.31</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="btn">
                Proceed To CheckOut{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-bar-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
