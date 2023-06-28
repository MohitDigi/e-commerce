import React from "react";
import newsLetter from "../image/banner-9.png";
import "../Assets/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section class="newsletter mb-15 wow animate__animated animate__fadeIn">
        <div class="">
          <div class="row">
            <div class="col-lg-12 ">
              <div class="position-relative newsletter-inner d-flex flex-wrap justify-content-around">
                <div class="newsletter-content ">
                  <h2 class="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>
                  <p class="mb-45">
                    Start You'r Daily Shopping with{" "}
                    <span class="text-brand">Nest Mart</span>
                  </p>
                  <form class="form-subcriber d-flex ">
                    <input type="email" placeholder="Your emaill address" />
                    <button class="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div>
                  <img src={newsLetter} alt="newsletter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleBanner;
