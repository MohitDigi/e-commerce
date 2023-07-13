// import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/Cards.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Cards = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = (await axios.get("http://localhost:3003/hotels")).data;
    setData(response);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-end">
        <div className="title d-flex">
          <h2>Featured Categories</h2>
          <ul className="list-inline nav links">
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Cake &amp; Milk
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Coffes &amp; Teas
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link active" href="shop-grid-right.html">
                Pet Foods
              </a>
            </li>
            <li className="list-inline-item nav-item">
              <a className="nav-link" href="shop-grid-right.html">
                Vegetables
              </a>
            </li>
          </ul>
        </div>
       
      </div>
           <Swiper
      spaceBetween={20}
      slidesPerView={2}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
      }}
    >
        {data.map((card, index) => (
      <SwiperSlide>
              <div key={index} className={`mapped-content ${card.bg}`}>
              {console.log(`background : ${card.bg}`)}
                <img src={card.imageSrc} alt={card.title} />
                <h6>{card.title}</h6>
                <p>{card.items} items</p>
              </div>
            </SwiperSlide>
            ))}
    </Swiper>    
    </>
  );
};

export default Cards;
