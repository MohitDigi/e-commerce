import React from "react";
import "../Assets/TopHeader.css";
const TopHeader = () => {
  return (
    <>
      <div className="row align-item-center top-header">
        <ul className="nav nav-pills col-xl-4 col-lg-4">
          <li className="nav-item">
            <a className="nav-link" href="/">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              My Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Wishlist
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              Order Tracking
            </a>
          </li>
        </ul>

        <div className="nav align-item-center col-xl-5 col-lg-4">
          <li className="nav-item" id="banner">
            <a className="nav-link" href="/">
            100% Secure delivery without contacting the courier
            </a>
          </li>
        </div>

        <ul className="nav nav-pills col-xl-3 col-lg-4">
          <li className="nav-item">
            <a className="nav-link d-flex" href="/">
              {" "}
              Need help? Call Us:<p> + 1800 900</p>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              English
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-fr" />
                  Francias
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-dt" />
                  Deutchs
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-ru" />
                  Pусский
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              USD
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-fr" />
                  INR
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-dt" />
                  MBP
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src="" alt="flag-ru" />
                  EU
                </a>
              </li>
            </ul>
          </li>
        </ul>
       
      </div>
    </>
  );
};

export default TopHeader;
