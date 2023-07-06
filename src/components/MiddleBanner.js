import React from "react";
import newsLetter from "../image/banner-9.png";
import "../Assets/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section className="newsletter row animate__animated animate__fadeIn">
        <div className="col-5 newsletter-content">
          <h2>
            Stay home & get your daily <br />
            needs from our shop
          </h2>
          <p>
            Start You'r Daily Shopping with{" "}
            <span className="text-brand">Nest Mart</span>
          </p>
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 rounded-start-pill"
              placeholder="Your emaill address"
              aria-label="Your emaill address"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          {/* <form className="form-subcriber d-flex ">
            <input
              className="border-0 rounded-start-pill"
              type="email"
              placeholder="Your emaill address"
            />
            <button className="btn btn-success" type="submit">
              Subscribe
            </button>
          </form> */}
        </div>
        <div className="newsletter-image col">
          <img src={newsLetter} alt="newsletter" />
        </div>
      </section>
    </>
  );
};

export default MiddleBanner;
