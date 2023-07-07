import React from "react";
import "../Assets/MajorCard.css";
const MajorCard = () => {
  return (
    <>
      <div className="row gx-4 gy-4">
        <div className=" col col-md-4 col-sm-6 col-xs-12">
          <div
            className="banner-img rounded animate__animated animate__fadeInUp"
            data-wow-delay="0"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
              alt=""
              className="rounded"
            />
            <div className="banner-text">
              <h4>
                Everyday Fresh & <br />
                Clean with Our
                <br />
                Products
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className=" col col-md-4 col-sm-6 col-xs-12">
          <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"
              alt=""
              className="rounded"
            />
            <div className="banner-text">
              <h4>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-md-4 col-sm-6 col-xs-12">
          <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
              alt=""
              className="rounded"
            />
            <div className="banner-text">
              <h4>
                The best Organic <br />
                Products Online
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorCard;
