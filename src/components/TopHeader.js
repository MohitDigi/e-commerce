import React from "react";
import "../Assets/TopHeader.css";
import frIcon from "../icon/flag-fr.png";
import dtIcon from "../icon/flag-dt.png";
import ruIcon from "../icon/flag-ru.png";
const TopHeader = () => {
  return (
    <>
      <div className="top-header d-flex align-items-center justify-content-between px-3 py-2 border-b-[1px] border-[#ececec] text-secondaryText">
        <ul className="d-flex gap-2 list-none" style={{ marginBottom: 0 }}>
          <li className="text-md">About Us</li>
          <div style={{ borderRight: "2px solid #ececec" }} />
          <li className="text-md">My Account</li>
          <div style={{ borderRight: "2px solid #ececec" }} />
          <li className="text-md">Wishlist</li>
          <div style={{ borderRight: "2px solid #ececec" }} />
          <li className="text-md">Order Tracking</li>
        </ul>

        <div className="text-sm">
          Supper Value Deals - Save more with coupons
        </div>

        <div className="d-flex gap-3">
          <div>
            Need help? Call Us:
            <span style={{ color: "#3BB77E", fontWeight: 600 }}>
              {" "}
              + 1800 900
            </span>
          </div>
          <div style={{ borderRight: "2px solid #ececec" }} />
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
                  <img
                    src={frIcon}
                    alt="flag-fr"
                    style={{ width: "20px", marginRight: "6px" }}
                  />
                  Francias
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={dtIcon} alt="flag-dt" style={{ width: "20px", marginRight: "6px" }}/>
                  Deutchs
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={ruIcon} alt="flag-ru" style={{ width: "20px", marginRight: "6px" }}/>
                  Pусский
                </a>
              </li>
            </ul>
          </li>
          <div style={{ borderRight: "2px solid #ececec" }} />
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
                  <img src={frIcon} alt="flag-fr" style={{ width: "20px", marginRight: "6px" }}/>
                  INR
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={dtIcon} alt="flag-dt" style={{ width: "20px", marginRight: "6px" }}/>
                  MBP
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  <img src={ruIcon} alt="flag-ru" style={{ width: "20px", marginRight: "6px" }}/>
                  EU
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
