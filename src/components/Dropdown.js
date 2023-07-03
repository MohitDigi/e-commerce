import React from "react";
import "../Assets/DropdownList.css";
import plusIcon from "../icon/plus-icon.svg";
import cat1 from "../icon/category-1.svg"
import cat2 from "../icon/category-2.svg"
import cat3 from "../icon/category-3.svg"
import cat4 from "../icon/category-4.svg"
import cat5 from "../icon/category-5.svg"
import cat6 from "../icon/category-6.svg"
import cat7 from "../icon/category-7.svg"
import cat8 from "../icon/category-8.svg"
import cat9 from "../icon/category-9.svg"
import cat10 from "../icon/category-10.svg"

const Dropdown = () => {
  return (
    <>
      <div className="main-container">
        <div className="list-container">
          <ul className="list mx-2">
            <li>
              <img src={cat1} />
              Milk and Dairies
            </li>
            <li>
              {" "}
              <img src={cat2} width={30}/>
              Clothing & Beauty
            </li>
            <li>
              {" "}
              <img src={cat3} />
              Pet foods & Toys
            </li>
            <li>
              {" "}
              <img src={cat4} />
              Baking Materials
            </li>
            <li>
              {" "}
              <img src={cat5} />
              Fresh Fruits
            </li>
          </ul>

          <ul className="list">
            <li>
              {" "}
              <img src={cat6} />
              Wines & Drinks
            </li>
            <li>
              {" "}
              <img src={cat7} />
              Fresh Seafoods
            </li>
            <li>
              {" "}
              <img src={cat8} />
              Fastfood
            </li>
            <li>
              {" "}
              <img src={cat9} />
              Vegetables
            </li>
            <li>
              {" "}
              <img src={cat10} />
              Bread & Juice
            </li>
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
