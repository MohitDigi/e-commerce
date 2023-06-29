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
      <div class="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div class="">
          <div class="header-wrap">
            <div class="logo logo-width-1">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div class="header-right">
              <div class="search-style-2">
                <form action="#">
                  <select class="select-active">
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
              <div class="header-action-right">
                <div class="header-action-2">
                  <div class="search-location">
                    <form action="#">
                      <select class="select-active">
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
                  <div class="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img
                        class="svgInject"
                        alt="Nest"
                        src={compareIcon}
                      />
                      <span class="pro-count blue">3</span>
                    </a>
                    <a href="shop-compare.html">
                      <span class="lable ml-0">Compare</span>
                    </a>
                  </div>
                  <div class="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        class="svgInject"
                        alt="Nest"
                        src={wishlistIcon}
                      />
                      <span class="pro-count blue">6</span>
                    </a>
                    <a href="shop-wishlist.html">
                      <span class="lable">Wishlist</span>
                    </a>
                  </div>
                  <div class="header-action-icon-2">
                    <a class="mini-cart-icon" href="shop-cart.html">
                      <img
                        alt="Nest"
                        src={cartIcon}
                      />
                      <span class="pro-count blue">2</span>
                    </a>
                    <a href="">
                      <span class="lable">Cart</span>
                    </a>
                  
                  </div>
                  <div class="header-action-icon-2">
                    <a href="page-account.html">
                      <img
                        class="svgInject"
                        alt="Nest"
                        src={userIcon}
                      />
                    </a>
                    <a href="page-account.html">
                      <span class="lable ml-0">Account</span>
                    </a>
                    {/* <div class="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html">
                            <i class="fi fi-rs-user mr-10"></i>My Account
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i class="fi fi-rs-location-alt mr-10"></i>Order
                            Tracking
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i class="fi fi-rs-label mr-10"></i>My Voucher
                          </a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">
                            <i class="fi fi-rs-heart mr-10"></i>My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i class="fi fi-rs-settings-sliders mr-10"></i>
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i class="fi fi-rs-sign-out mr-10"></i>Sign out
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
