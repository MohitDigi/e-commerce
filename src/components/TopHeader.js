import React from "react";
import "../Assets/TopHeader.css";
import frIcon from "../icon/flag-fr.png"
import dtIcon from "../icon/flag-dt.png"
import ruIcon from "../icon/flag-ru.png"
const TopHeader = () => {
  return (
    <>
      <div className="row align-item-center top-header ">
      <div className="header-info w-auto">
        <ul className="nav nav-pills">
         

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

          </div>
        <div className="nav align-item-center w-auto">
          <li className="nav-item" id="banner">
            <a className="nav-link" href="/">
            100% Secure delivery without contacting the courier
            </a>
          </li>
        </div>

        <ul className="nav nav-pills w-auto">
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
                  <img src={frIcon} alt="flag-fr" />
                  Francias
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={dtIcon} alt="flag-dt" />
                  Deutchs
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={ruIcon} alt="flag-ru" />
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
                  <img src={frIcon} alt="flag-fr" />
                  INR
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={dtIcon} alt="flag-dt" />
                  MBP
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={ruIcon} alt="flag-ru" />
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
