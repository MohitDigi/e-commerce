import React from "react";
import newsLetter from "../image/banner-9.png";
import "../Assets/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section class="newsletter row animate__animated animate__fadeIn">
        <div className="col-5 newsletter-content">
          <h2>
            Stay home & get your daily <br />
            needs from our shop
          </h2>
          <p>
            Start You'r Daily Shopping with{" "}
            <span class="text-brand">Nest Mart</span>
          </p>
          <div class="input-group">
            <input
              type="text"
              class="form-control border-0 rounded-start-pill"
              placeholder="Your emaill address"
              aria-label="Your emaill address"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          {/* <form class="form-subcriber d-flex ">
            <input
              className="border-0 rounded-start-pill"
              type="email"
              placeholder="Your emaill address"
            />
            <button class="btn btn-success" type="submit">
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
