import React from 'react'

const MajorCard = () => {
  return (
    <>
 <div className="row gx-4 ">
        <div className=" col col-md-4 col-sm-6 col-xs-12">
          <div
            className="banner-img animate__animated animate__fadeInUp"
            data-wow-delay="0"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
              alt=""
            />
            <div className="banner-text">
              <h4>
                Everyday Fresh & <br />
                Clean with Our
                <br />
                Products
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now <i className="fi-rs-arrow-small-right"></i>
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
            />
            <div className="banner-text">
              <h4>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now <i className="fi-rs-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className=" col col-md-4 col-sm-6 col-xs-12">
          <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
              alt=""
            />
            <div className="banner-text">
              <h4>
                The best Organic <br />
                Products Online
              </h4>
              <a href="shop-grid-right.html" className="btn btn-xs btn-success">
                Shop Now <i className="fi-rs-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MajorCard