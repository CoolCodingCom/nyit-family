import "../styles/signup.css";
import googleIcon from "../../assets/google.svg";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import hidePassword from "../../assets/hidePassword-white.svg";
import showPassword from "../../assets/showPassword-white.svg";

export default function Signup() {
  const [isHide, setIsHide] = useState(true);
  function toggleHide() {
    setIsHide((prev) => !prev);
  }
  return (
    <div className="signup-page poppins-regular">
      <div className="signup-container">
        <h1 className="signup-title">Create Account</h1>
        <div className="signup-content">
          <button className="signup-button button-with-image" type="button">
            <img className="google-login-img" src={googleIcon} alt="google" />
            Sign up with Google
          </button>
          <span>-OR-</span>
          <Form method="post" className="signup-form" replace>
            <div className="signup-form-row">
              <input
                className="signup-input"
                name="fullname"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="signup-form-row">
              <input
                className="signup-input"
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="signup-form-row password-input-wrapper">
              <input
                className="signup-input"
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

            <div className="signup-form-row">
              <button className="create-account-button">Create Account</button>
            </div>
          </Form>
          <div className="bottom-log-in">
            <span>Already have an account? </span>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
