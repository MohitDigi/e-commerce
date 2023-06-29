import React from "react";
import "../Assets/DropdownList.css"
import plusIcon from "../icon/plus-icon.svg";
const Dropdown = () => {
  return (
    <>
      <div className="main-container">
        <div className="list-container">
          
            <ul className="list">
              <li>Milk and Dairies</li>
              <li>Clothing & Beauty</li>
              <li>Pet foods & Toys</li>
              <li>Baking Materials</li>
              <li>Fresh Fruits</li>
            </ul>
         
          
            <ul className="list">
              <li>Wines & Drinks</li>
              <li>Fresh Seafoods</li>
              <li>Fastfood</li>
              <li>Vegetables</li>
              <li>Bread & Juice</li>
            </ul>
       
          {/* plus icon */}
        </div>
        <div className="plus-icon">
          <img src={plusIcon} alt="plus" />
          Show More...
        </div>
      </div>
    </>
  );
};

export default Dropdown;
