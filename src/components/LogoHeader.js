import React from "react";
import "../Assets/LogoHeader.css"
import logo from "../icon/logo.svg"
import compareIcon from "../icon/icon-compare.svg"
import userIcon from "../icon/icon-user.svg"
import cartIcon from "../icon/icon-cart.svg"
import wishlistIcon from "../icon/icon-heart.svg"

const LogoHeader = () => {
  return (
    <>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
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
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="search-location">
                    <form action="#">
                      <select className="select-active">
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
                  <div className="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src={compareIcon}
                      />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="shop-compare.html">
                      <span className="lable ml-0">Compare</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src={wishlistIcon}
                      />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="shop-wishlist.html">
                      <span className="lable">Wishlist</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img
                        alt="Nest"
                        src={cartIcon}
                      />
                      <span className="pro-count blue">2</span>
                    </a>
                    <a href="">
                      <span className="lable">Cart</span>
                    </a>
                  
                  </div>
                  <div className="header-action-icon-2">
                    <a href="page-account.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src={userIcon}
                      />
                    </a>
                    <a href="page-account.html">
                      <span className="lable ml-0">Account</span>
                    </a>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
