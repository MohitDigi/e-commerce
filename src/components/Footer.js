import React from "react";
import logo from "../icon/logo.svg";
import "../Assets/Footer.css";
import appStore from "../icon/app-store.jpg"
import playStore from "../icon/google-play.jpg"
import paymentIcon from "../icon/payment-method.png"
import phoneIcon from "../icon/phone-call.svg"
import contactIcon from "../icon/icon-location.svg"
import callIcon from "../icon/icon-contact.svg"
import emailIcon from "../icon/icon-email-2.svg"
import clockIcon from "../icon/icon-clock.svg"
import fb from "../icon/icon-facebook-white.svg"
import tweet from "../icon/icon-twitter-white.svg"
import pt from "../icon/icon-pinterest-white.svg"
import ig from "../icon/icon-instagram-white.svg"
import yt from "../icon/icon-youtube-white.svg"

const Footer = () => {
  return (
    <>
      <section className="section-padding footer-mid">
        
          <div className="row gx-3">
            <div className="col-md-2 ">
              <div
                className="widget-about animate__animated animate__fadeInUp"
                data-wow-delay="0"
              >
                <div className="logo">
                  <a href="index.html" className="">
                    <img src={logo} alt="logo" />
                  </a>
                  <p className="text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul className="contact-info">
                  <li>
                    <img src={contactIcon} alt="" />
                    <strong>Address: </strong>
                    <span>
                      5171 W Campbell Ave, Utah 53127 United
                      States
                    </span>
                  </li>
                  <li>
                    <img src={callIcon} alt="" />
                    <strong>Call Us:</strong>
                    <span>(+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <img src={emailIcon} alt="" />
                    <strong>Email:</strong>
                    <span>
                      <a href="" className="__email__">
                      sale@Nest.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <img src={clockIcon} alt="" />
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-link-widget col-md-2  wow animate__animated animate__fadeInUp">
              <h4 className=" widget-title">Company</h4>
              <ul className="footer-list ">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col-md-2  wow animate__animated animate__fadeInUp "
            >
              <h4 className="widget-title">Account</h4>
              <ul className="footer-list ">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help Ticket</a>
                </li>
                <li>
                  <a href="#">Shipping Details</a>
                </li>
                <li>
                  <a href="#">Compare products</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col-md-2  wow animate__animated animate__fadeInUp"
              data-wow-delay=".3s"
            >
              <h4 className="widget-title">Corporate</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">Become a Vendor</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Farm Business</a>
                </li>
                <li>
                  <a href="#">Farm Careers</a>
                </li>
                <li>
                  <a href="#">Our Suppliers</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Promotions</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col-md-2  wow animate__animated animate__fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 className="widget-title">Popular</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">Milk & Flavoured Milk</a>
                </li>
                <li>
                  <a href="#">Butter and Margarine</a>
                </li>
                <li>
                  <a href="#">Eggs Substitutes</a>
                </li>
                <li>
                  <a href="#">Marmalades</a>
                </li>
                <li>
                  <a href="#">Sour Cream and Dips</a>
                </li>
                <li>
                  <a href="#">Tea & Kombucha</a>
                </li>
                <li>
                  <a href="#">Cheese</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget widget-install-app col-md-2  wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <h4 className="widget-title">Install App</h4>
              <p className="">From App Store or Google Play</p>
              <div className="download-app">
                <a href="#" className="hover-up">
                  <img className="active" src={appStore} alt="" />
                </a>
                <a href="#" className="hover-up ">
                  <img src={playStore} alt="" />
                </a>
              </div>
              <p className="mb-20">Secured Payment Gateways</p>
              <img className="" src={paymentIcon} alt="" />
            </div>
          </div>
      </section>
      <div className=" pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
            <div className="row align-items-center">
                <div className="">
                    <div className="footer-bottom"></div>
                </div>
                <div className="col">
                    <p>&copy; 2022, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
                </div>
                <div className="col text-center d-none d-xl-block">
                    <div className="hotline d-lg-inline-flex mr-30">
                        <img src={phoneIcon} alt="hotline" />
                        <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
                    </div>
                    <div className="hotline d-lg-inline-flex">
                        <img src={phoneIcon} alt="hotline" />
                        <p>1900 - 8888<span>24/7 Support Center</span></p>
                    </div>
                </div>
                <div className="col text-end d-none d-md-block">
                    <div className="mobile-social-icon">
                        <h6>Follow Us</h6>
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={pt} alt="" /></a>
                        <a href="#"><img src={tweet} alt="" /></a>
                        <a href="#"><img src={ig} alt="" /></a>
                        <a href="#"><img src={yt} alt="" /></a>
                    </div>
                    <p className="font-sm">Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;
