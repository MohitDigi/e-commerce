import React from "react";
import "../Assets/item.css";
import RatingComp from "./Rating";
// import MajorCard from "./MajorCard";
// import { ReactComponentElement as AddCart } from "../icon/AddCart.svg";
// import AddCart from "../icon/AddCart";

const SubCards = () => {
  return (
    <>
      <div className="popular-products d-flex justify-content-between animate__ animate__fadeIn">
        <h3>Popular Products</h3>
        <ul className="nav  links custom-links-list" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="nav-tab-one"
              data-bs-toggle="tab"
              data-bs-target="#tab-one"
              type="button"
              role="tab"
              aria-controls="tab-one"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-two"
              data-bs-toggle="tab"
              data-bs-target="#tab-two"
              type="button"
              role="tab"
              aria-controls="tab-two"
              aria-selected="false"
            >
              Milks &amp; Dairies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-three"
              data-bs-toggle="tab"
              data-bs-target="#tab-three"
              type="button"
              role="tab"
              aria-controls="tab-three"
              aria-selected="false"
            >
              Coffes &amp; Teas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-four"
              data-bs-toggle="tab"
              data-bs-target="#tab-four"
              type="button"
              role="tab"
              aria-controls="tab-four"
              aria-selected="false"
            >
              Pet Foods
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-five"
              data-bs-toggle="tab"
              data-bs-target="#tab-five"
              type="button"
              role="tab"
              aria-controls="tab-five"
              aria-selected="false"
            >
              Meats
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-six"
              data-bs-toggle="tab"
              data-bs-target="#tab-six"
              type="button"
              role="tab"
              aria-controls="tab-six"
              aria-selected="false"
            >
              Vegetables
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-seven"
              data-bs-toggle="tab"
              data-bs-target="#tab-seven"
              type="button"
              role="tab"
              aria-controls="tab-seven"
              aria-selected="false"
            >
              Fruits
            </button>
          </li>
        </ul>
      </div>
      <div className="row gx-4 gy-5 product-card">
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between ">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div className="card-body">
              <div>hodo Foods</div>
              <p className="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p className="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success d-flex align-items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="ms-1">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCards;
