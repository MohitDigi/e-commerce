import React from "react";
import "../Assets/Slider.css";
import sliderImage from "../image/Slider-1.png";
import sliderImage2 from "../image/Slider-2.png";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="container carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div
            class="carousel-item active"
            style={{ backgroundImage: { sliderImage } }}
          >
            <img src={sliderImage} class="w-100 rounded-5" alt="slider1" />
            {/* <div className=""> */}
            <h1>
              Don’t miss amazing
              <br />
              grocery deals
            </h1>

            <p class="mb-65">Sign up for the daily newsletter</p>

            <form className="news-form">
              <input
                className="border-0 rounded-start-pill"
                type="email"
                placeholder="Your emaill address"
              />

              <button
                class="btn btn-success rounded-end-pill border-0"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            {/* </div> */}
          </div>

          <div class="carousel-item">
            <img
              src={sliderImage2}
              class="d-block w-100 rounded-5"
              alt="slider2"
            />

            <div className="carousel-caption text-black custom">
              <h1 class="display-2">
                {" "}
                Fresh Vegetables
                <br />
                Big discount
              </h1>

              <p class="mb-65">Save upto 50% off on your first order</p>
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
              {/* <form className="news-form">
                <input
                  className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                />

                <button
                  class="btn btn-success rounded-end-pill border-0"
                  type="submit"
                  tabindex="-1"
                >
                  Subscribe
                </button>
              </form> */}
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>

          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>

          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="tcb-bs-fullscreen">
        <div
          id="carousel-example-generic"
          class="carousel slide carousel-bg"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner" role="listbox">
            <div
              class="item active"
              style={{ backgroundImage: { sliderImage2 } }}
            >
              <div class="carousel-caption">...</div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: "url(https://unsplash.it/1600/840?image=545)",
              }}
            >
              <div class="carousel-caption">...</div>
            </div>
          </div>
          {/* <!-- Controls --> */}
          <a
            class="left carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <span
              class="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <span
              class="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
