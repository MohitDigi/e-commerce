import React, { useState } from "react";
import "../Assets/LoginPage/LoginPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const secCode = "8675";
  const[user,setUser] = useState("");
  const[pswd,setPswd] = useState("");
  const[code,setCode] = useState("");

  const errorMsg = () => toast.error('Please fill all the fields !!!');
  const successMsg = () => toast.success('Successfully logged in !!!')

  const handleSubmit =() => {
  user==='' || pswd==='' || code !==secCode ? <>{console.log('Please enter value')}{errorMsg()} </> :<> {console.log('Success')}{successMsg()} </>;
  };
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
            <input type="email" name="" placeholder="Username or Email *" required onChange={(e)=> setUser(e.target.value)}/>
            <input type="password" name="" placeholder="Your password *" required onChange={(e)=> setPswd(e.target.value)}/>
            <div className="security-section">
              <input type="text" name="" placeholder="Security code *" required onChange={(e)=> setCode(e.target.value)}/>
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
          <button type="submit" className="login-btn" onClick={handleSubmit}>Log in </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
