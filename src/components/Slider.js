import React from "react";
import "../Assets/Slider.css";
import sliderImage from "../image/Slider-1.png";
import sliderImage2 from "../image/Slider-2.png";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="container carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
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

        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ backgroundImage: { sliderImage } }}
          >
            <img src={sliderImage} className="w-100 rounded-5" alt="slider1" />
            {/* <div className=""> */}
            <h1>
              Don’t miss amazing
              <br />
              grocery deals
            </h1>

            <p className="mb-65">Sign up for the daily newsletter</p>

            <form className="news-form">
              <input
                className="border-0 rounded-start-pill"
                type="email"
                placeholder="Your emaill address"
              />

              <button
                className="btn btn-success rounded-end-pill border-0"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            {/* </div> */}
          </div>

          <div className="carousel-item">
            <img
              src={sliderImage2}
              className="d-block w-100 rounded-5"
              alt="slider2"
            />

            <div className="carousel-caption text-black custom">
              <h1 className="display-2">
                {" "}
                Fresh Vegetables
                <br />
                Big discount
              </h1>

              <p className="mb-65">Save upto 50% off on your first order</p>
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
              {/* <form className="news-form">
                <input
                  className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                />

                <button
                  className="btn btn-success rounded-end-pill border-0"
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
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>

          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>

          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="tcb-bs-fullscreen">
        <div
          id="carousel-example-generic"
          className="carousel slide carousel-bg"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner" role="listbox">
            <div
              className="item active"
              style={{ backgroundImage: { sliderImage2 } }}
            >
              <div className="carousel-caption">...</div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://unsplash.it/1600/840?image=545)",
              }}
            >
              <div className="carousel-caption">...</div>
            </div>
          </div>
          {/* <!-- Controls --> */}
          <a
            className="left carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
