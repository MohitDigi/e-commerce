import React from "react";
import "../Assets/Signup/Signup.css";
const Signup = () => {
  return (
    <>
        <div className="signup-main-container">
          <div className="signup-section">
            <h1>Create an Account</h1>
            <p>
              Already have an account?
              <a href="" className="text-brand">
                {" "}
                Login
              </a>
            </p>

            <div className="signup-form-section">
              <input type="text" name="" placeholder="Username" required />
              <input type="email" name="" placeholder="Email" required />
              <input type="password" name="" placeholder="Password" required />
              <input
                type="password"
                name=""
                placeholder="Confirm password"
                required
              />
              <div className="security-section">
                <input
                  type="text"
                  name=""
                  placeholder="Security code *"
                  required
                />
                <div class="security-code">
                  <b class="text-green">8</b>
                  <b class="text-red">6</b>
                  <b class="text-blue">7</b>
                  <b class="text-yellow">5</b>
                </div>
              </div>
              <div className="radio-chk">
                <div>
                  <input type="radio" name="verify" />
                  <b>I am a customer</b>
                </div>
                <div>
                  <input type="radio" name="verify" />
                  <b>I am a vendor</b>
                </div>
              </div>
            </div>
            <div className="signup-form-footer">
              <div className="chkbox">
                <input type="checkbox" name="remember-me" />
                <span>I agree to terms and policy</span>
              </div>
              <a href="" className="learn-more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-book"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>{" "}
                Learn More
              </a>
            </div>
            <button type="submit" className="signup-btn">
              Submit & Register
            </button>
            <div>
              <p className="note">
                Note:Your personal data will be used to support your experience
                <br />
                throughout this website, to manage access to your account, and
                for other
                <br /> purposes described in our privacy policy
              </p>
            </div>
          </div>
          <div className="signupWith-section">
            <div className="signup-container">
              <button type="submit" className="fbLogo animate__tada">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-facebook.svg"
                  alt=""
                />{" "}
                Continue with Facebook
              </button>
              <button type="submit" className="googleLogo animate__tada">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-google.svg"
                  alt=""
                />{" "}
                Continue with Google
              </button>
              <button type="submit" className="appleLogo animate__tada">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-apple.svg"
                  alt=""
                />{" "}
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Signup;
