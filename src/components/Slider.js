import React from "react";
import "../Assets/Slider.css";
import sliderImage from "../image/Slider-1.png";
import sliderImage2 from "../image/Slider-2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <>
      <Swiper
        // spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        
      >
        <SwiperSlide>
          <img src={sliderImage} alt="" className="slider-image" />
          <div className="slider-caption">
            <h1>
              Don’t miss amazing
              <br />
              grocery deals
            </h1>
            <p className="mb-65">Sign up for the daily newsletter</p>

            <div className="input-group  bg-white">
            <input
              type="text"
              className="form-control border-0 py-3 rounded-start-pill"
              placeholder="Your emaill address"
              aria-label="Your emaill address"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append subscribe-btn">
              <button className="btn text-white py-3 px-5" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={sliderImage2} alt="" className="slider-image" />
          <div className="slider-caption">
            <h1 className="heading">
              Fresh Vegetables
              <br />
              Big discount
            </h1>
            <p className="sub-heading">Save upto 50% off on your first order</p>
            <div className="input-group  bg-white">
            <input
              type="text"
              className="form-control border-0 py-3 rounded-start-pill"
              placeholder="Your emaill address"
              aria-label="Your emaill address"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append subscribe-btn">
              <button className="btn text-white py-3 px-5" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
