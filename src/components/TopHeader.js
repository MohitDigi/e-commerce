import React from "react";
// import "../Assets/TopHeader.scss";
const TopHeader = () => {
  return (
    <>
      <div class="header-top header-top-ptb-1 d-none d-lg-block">
        <div class="">
          <div class="row align-items-center d-flex">
            <div class="col-xl-3 col-lg-4">
              <div class="header-info">
                <ul className="d-flex p-2">
                  <li>
                    <a href="page-about.htlm">About Us</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="shop-wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="shop-order.html">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="col-xl-6 col-lg-4">
              <div class="text-center">
                <div id="news-flash" class="d-inline-block">
                  <ul>
                    <li>100% Secure delivery without contacting the courier</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div class="col-xl-3 col-lg-4">
              <div class="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us:{" "}
                    <strong class="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <a class="language-dropdown-active" href="#">
                      English <i class="fi-rs-angle-small-down"></i>
                    </a>
                    <ul class="language-dropdown">
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-fr.png" alt="" />
                          Français
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-dt.png" alt="" />
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-ru.png" alt="" />
                          Pусский
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="language-dropdown-active" href="#">
                      USD <i class="fi-rs-angle-small-down"></i>
                    </a>
                    <ul class="language-dropdown">
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-fr.png" alt="" />
                          INR
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-dt.png" alt="" />
                          MBP
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/imgs/theme/flag-ru.png" alt="" />
                          EU
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
