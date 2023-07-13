import React from "react";
import "../Assets/FeatureFooter.css";
import icon1 from "../icon/icon-1.svg";
import icon2 from "../icon/icon-2.svg";
import icon3 from "../icon/icon-3.svg";
import icon4 from "../icon/icon-4.svg";
import icon5 from "../icon/icon-5.svg";
import icon6 from "../icon/icon-6.svg";

const FeatureFooter = () => {
  return (
    <>
      <section className="featured my-3 row gx-5 gy-4 justify-content-center">
        <div
          className="banner-left-icon d-flex align-items-center  col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 p-2 animate__animated animate__fadeInUp"
          data-wow-delay="0"
        >
          <div className="banner-icon m-2">
            <img src={icon1} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>

        <div
          className="banner-left-icon d-flex align-items-center  col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 px-2 animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <div className="banner-icon m-2">
            <img src={icon2} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Free delivery</h3>
            <p>24/7 amazing services</p>
          </div>
        </div>

        <div
          className="banner-left-icon d-flex align-items-center  col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 p-2 animate__animated animate__fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="banner-icon m-2">
            <img src={icon3} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Great daily deal</h3>
            <p>When you sign up</p>
          </div>
        </div>

        <div
          className="banner-left-icon d-flex align-items-center  col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 p-2 animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="banner-icon m-2">
            <img src={icon4} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Wide assortment</h3>
            <p>Mega Discounts</p>
          </div>
        </div>

        <div
          className="banner-left-icon d-flex  align-items-center  col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 p-2 animate__animated animate__fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="banner-icon m-2">
            <img src={icon5} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Easy returns</h3>
            <p>Within 30 days</p>
          </div>
        </div>

        <div
          className="banner-left-icon d-flex  align-items-center d-xl-none d-lg-none  m-2 col-lg-2 col-md-4 col-sm-6 col-xs-12 m-2 p-2 animate__animated animate__fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="banner-icon m-2">
            <img src={icon6} alt="" />
          </div>
          <div className="banner-text m-2">
            <h3 className="icon-box-title">Safe delivery</h3>
            <p>Within 30 days</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFooter;
