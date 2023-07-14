import React from "react";
import "../Assets/LoginPage/LoginPage.css";
const LoginPage = () => {
  return (
    <>
      <div className="login-main-container">
        <div className="image-section">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png"
            alt=""
          />
        </div>
        <div className="login-section">
          <h1>Login</h1>
          <p>
            Don't have an account?
            <a href="" className="text-brand">
              {" "}
              Create here
            </a>
          </p>

          <div className="login-form-section">
            <input type="email" name="" placeholder="Username or Email *" required/>
            <input type="password" name="" placeholder="Your password *" required/>
            <div className="security-section">
              <input type="text" name="" placeholder="Security code *" required/>
              <div class="security-code">
                <b class="text-green">8</b>
                <b class="text-red">6</b>
                <b class="text-blue">7</b>
                <b class="text-yellow">5</b>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <div className="chkbox">
              <input type="checkbox" name="remember-me" />
              <span>Remember me</span>
            </div>
            <a href="">Forget password?</a>
          </div>
          <button type="submit" className="login-btn">Log in </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
