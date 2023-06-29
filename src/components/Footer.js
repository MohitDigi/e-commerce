import React from "react";
import logo from "../icon/logo.svg";
import "../Assets/Footer.css";
import appStore from "../icon/app-store.jpg"
import playStore from "../icon/google-play.jpg"
import paymentIcon from "../icon/payment-method.png"
import phoneIcon from "../icon/phone-call.svg"
// import appStore from "../icon/app-store.jpg"
// import appStore from "../icon/app-store.jpg"

const Footer = () => {
  return (
    <>
      <section class="section-padding footer-mid">
        <div class="">
          <div class="row">
            <div class="col">
              <div
                class="widget-about animate__animated animate__fadeInUp"
                data-wow-delay="0"
              >
                <div class="logo">
                  <a href="index.html" class="">
                    <img src={logo} alt="logo" />
                  </a>
                  <p class="text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul class="contact-info">
                  <li>
                    <img src="" alt="" />
                    <strong>Address: </strong>{" "}
                    <span>
                      5171 W Campbell Ave, Utah 53127 United
                      States
                    </span>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <strong>Call Us:</strong>
                    <span>(+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <strong>Email:</strong>
                    <span>
                      <a href="" class="__email__">
                      sale@Nest.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-link-widget col wow animate__animated animate__fadeInUp">
              <h4 class=" widget-title">Company</h4>
              <ul class="footer-list ">
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
            <div
              class="footer-link-widget col wow animate__animated animate__fadeInUp "
            >
              <h4 class="widget-title">Account</h4>
              <ul class="footer-list ">
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
            <div
              class="footer-link-widget col wow animate__animated animate__fadeInUp"
              data-wow-delay=".3s"
            >
              <h4 class="widget-title">Corporate</h4>
              <ul class="footer-list">
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
            <div
              class="footer-link-widget col wow animate__animated animate__fadeInUp"
              data-wow-delay=".4s"
            >
              <h4 class="widget-title">Popular</h4>
              <ul class="footer-list">
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
            <div
              class="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <h4 class="widget-title">Install App</h4>
              <p class="">From App Store or Google Play</p>
              <div class="download-app">
                <a href="#" class="hover-up">
                  <img class="active" src={appStore} alt="" />
                </a>
                <a href="#" class="hover-up ">
                  <img src={playStore} alt="" />
                </a>
              </div>
              <p class="mb-20">Secured Payment Gateways</p>
              <img class="" src={paymentIcon} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div class=" pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
            <div class="row align-items-center">
                <div class="">
                    <div class="footer-bottom"></div>
                </div>
                <div class="col">
                    <p>&copy; 2022, <strong class="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
                </div>
                <div class="col text-center d-none d-xl-block">
                    <div class="hotline d-lg-inline-flex mr-30">
                        <img src={phoneIcon} alt="hotline" />
                        <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
                    </div>
                    <div class="hotline d-lg-inline-flex">
                        <img src={phoneIcon} alt="hotline" />
                        <p>1900 - 8888<span>24/7 Support Center</span></p>
                    </div>
                </div>
                <div class="col text-end d-none d-md-block">
                    <div class="mobile-social-icon">
                        <h6>Follow Us</h6>
                        <a href="#"><img src="" alt="" /></a>
                        <a href="#"><img src="" alt="" /></a>
                        <a href="#"><img src="" alt="" /></a>
                        <a href="#"><img src="" alt="" /></a>
                        <a href="#"><img src="" alt="" /></a>
                    </div>
                    <p class="font-sm">Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;
