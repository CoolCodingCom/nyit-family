import { useState } from "react";
import { Link, Form } from "react-router-dom";
import "../styles/login.css";
import loginIcon from "../../assets/loginIcon.svg";
import googleIcon from "../../assets/google.svg";
import loginImage from "../../assets/loginImage.svg";
import hidePassword from "../../assets/hidePassword.svg";
import showPassword from "../../assets/showPassword.svg";

export default function Login() {
  const [isHide, setIsHide] = useState(true);
  function toggleHide() {
    setIsHide((prev) => !prev);
  }
  return (
    <div className="login-page poppins-regular">
      <div className="login-welcome">
        <div className="login-float-title">
          <h1>NYIT Family</h1>
          <p>To help each other</p>
        </div>
        <img className="login-image" src={loginImage} alt="image" />
      </div>
      <div className="login-container">
        <div className="login-content">
          <img className="login-icon" src={loginIcon} alt="loginIcon" />
          <h1>Welcome back!</h1>
          <p>Please enter your details</p>
          <Form method="post" className="login-form" replace>
            <div className="login-form-row login-email-row">
              <label htmlFor="login-email" className="input-field-label">
                Email
              </label>
              <input
                className="login-input"
                id="login-email"
                name="email"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div className="login-form-row password-input-wrapper">
              <label htmlFor="login-password" className="input-field-label">
                password
              </label>
              <input
                className="login-input"
                id="login-password"
                name="password"
                type={isHide ? "password" : "text"}
                placeholder="Password"
              ></input>
              <img
                src={isHide ? showPassword : hidePassword}
                alt="hide eye"
                onClick={toggleHide}
              ></img>
            </div>

            <div className="login-form-row below-password">
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" id="remember-30-days"></input>
                <label
                  htmlFor="remember-30-days"
                  style={{ fontSize: "smaller" }}
                >
                  Remember for 30 days
                </label>
              </div>
              <span className="forget-password">Forgot password?</span>
            </div>
            <div className="login-form-row login-button-row">
              <button className="login-button black">Log In</button>
            </div>
            <div className="login-form-row">
              <button
                className="login-button light-purple button-with-image"
                type="button"
              >
                <img
                  className="google-login-img"
                  src={googleIcon}
                  alt="google"
                />
                Log in with Google
              </button>
            </div>
          </Form>
        </div>
        <div className="login-footer">
          <div className="bottom-sign-up">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
