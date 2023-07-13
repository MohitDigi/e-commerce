import React from "react";
import "../Assets/LogoHeader.css";
import logo from "../icon/logo.svg";
import compareIcon from "../icon/icon-compare.svg";
import userIcon from "../icon/icon-user.svg";
import cartIcon from "../icon/icon-cart.svg";
import wishlistIcon from "../icon/icon-heart.svg";

const LogoHeader = () => {
  return (
    <>
      <div className="logo-header d-flex justify-content-between align-items-center py-4 border-end-0 border-start-0">
        <img src={logo} alt="logo" />

        <form
          action="/"
          className="d-flex align-items-center px-2 py-3 rounded"
          style={{ border: "2px solid #BCE3C9" }}
        >
          {/* All Categories */}
          <div className="px-2">
            <select className=" border-0 bg-white">
              <option>All Categories</option>
              <option>Milks and Dairies</option>
              <option>Wines & Alcohol</option>
              <option>Clothing & Beauty</option>
              <option>Pet Foods & Toy</option>
              <option>Fast food</option>
              <option>Baking material</option>
              <option>Vegetables</option>
              <option>Fresh Seafood</option>
              <option>Noodles & Rice</option>
              <option>Ice cream</option>
            </select>
          </div>
          {/* Search Input Box */}
          <input
            type="text"
            placeholder="Search for items..."
            className="border-0 border-start px-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </form>

        <div className="d-flex align-items-center ">
          <div className="search-location ">
            <form
              action="#"
              className="d-flex align-items-center px-2 py-1 rounded"
              style={{ border: "2px solid #ececec" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <select
                className="px-2 py-1 bg-white border-0"
                style={{ outline: "none", color: "#3BB77E" }}
              >
                <option>Your Location</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Indiana</option>
                <option>Maryland</option>
                <option>Nevada</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
              </select>
            </form>
          </div>
          <div className="side-icons d-flex justify-content-between ms-2">
            <div className=" position-relative ps-3">
              <img className="svgInject" alt="Nest" src={compareIcon} />
              {/* <span className="pro-count blue">3</span> */}
              <span class="header-action-icon position-absolute top-0 start-30 translate-middle badge rounded-pill ">
                3<span class="visually-hidden">unread messages</span>
              </span>
              <span className="ms-2">Compare</span>
            </div>
            <div className="position-relative ps-3">
              <img className="svgInject" alt="Nest" src={wishlistIcon} />
              {/* <span className="pro-count blue">6</span> */}
              <span class="header-action-icon position-absolute top-0 start-30 translate-middle badge rounded-pill ">
                6<span class="visually-hidden">unread messages</span>
              </span>
              <span className="ms-2">Wishlist</span>
            </div>
            <div className="position-relative ps-3">
              <img alt="Nest" src={cartIcon} />
              {/* <span className="pro-count blue">2</span> */}
              <span class="header-action-icon position-absolute top-0 start-30 translate-middle badge rounded-pill ">
                2<span class="visually-hidden">unread messages</span>
              </span>
              <span className="ms-2">Cart</span>
            </div>
            <div className="ps-3">
              <img className="svgInject" alt="Nest" src={userIcon} />
              <span className="lable ms-2">Account</span>
              {/* <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-user mr-10"></i>My Account
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-location-alt mr-10"></i>Order
                            Tracking
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-label mr-10"></i>My Voucher
                          </a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i className="fi fi-rs-sign-out mr-10"></i>Sign out
                          </a>
                        </li>
                      </ul>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
