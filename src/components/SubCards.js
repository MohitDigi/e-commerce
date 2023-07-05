import React from "react";
import "../Assets/item.css";
import RatingComp from "./Rating";

const SubCards = () => {
  return (
    <>
      <div className="row gx-4 ">
        <div class=" col col-md-4 col-sm-6 col-xs-12">
          <div
            class="banner-img animate__animated animate__fadeInUp"
            data-wow-delay="0"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
              alt=""
            />
            <div class="banner-text">
              <h4>
                Everyday Fresh & <br />
                Clean with Our
                <br />
                Products
              </h4>
              <a href="shop-grid-right.html" class="btn btn-xs btn-success">
                Shop Now <i class="fi-rs-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class=" col col-md-4 col-sm-6 col-xs-12">
          <div
            class="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"
              alt=""
            />
            <div class="banner-text">
              <h4>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h4>
              <a href="shop-grid-right.html" class="btn btn-xs btn-success">
                Shop Now <i class="fi-rs-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class=" col col-md-4 col-sm-6 col-xs-12">
          <div
            class="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
              alt=""
            />
            <div class="banner-text">
              <h4>
                The best Organic <br />
                Products Online
              </h4>
              <a href="shop-grid-right.html" class="btn btn-xs btn-success">
                Shop Now <i class="fi-rs-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class=" animate__ animate__fadeIn animated d-flex justify-content-between">
        <h3>Popular Products</h3>
        <ul class="nav  links custom-links-list" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
      <div class="row gx-4 gy-5 product-card">
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                className="card-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <div>hodo Foods</div>
              <p class="card-title">
                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
              </p>
              <RatingComp />
              <p class="card-text">
                By <span className="text-success">NestFood</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-success fs-5">$54.85</p>
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCards;
