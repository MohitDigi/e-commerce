import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../Assets/Navbar.css";
import browseIcon from "../icon/browse-icon.png";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <button
        className="browser-btn"
        onClick={() => setFlag(true)}
        onBlur={() => setFlag(false)}
        onMouseOver={() => setFlag(false)}
      >
        <img src={browseIcon} />
        Browse All Categories
      </button>
      {flag === true ? <Dropdown /> : <></>}
    </>
  );
};

export default Navbar;
