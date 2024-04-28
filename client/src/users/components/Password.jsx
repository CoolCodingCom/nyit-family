import { useState } from "react";
import hidePassword from "../../assets/hidePassword.svg";
import showPassword from "../../assets/showPassword.svg";
import whiteHidePassword from "../../assets/hidePassword-white.svg";
import whiteShowPassword from "../../assets/showPassword-white.svg";

export default function Password({ customClass, eyeTheme, showLabel }) {
  const showImg = eyeTheme === "white" ? whiteShowPassword : showPassword;
  const hideImg = eyeTheme === "white" ? whiteHidePassword : hidePassword;
  const [isHide, setIsHide] = useState(true);
  function toggleHide() {
    setIsHide((prev) => !prev);
  }
  return (
    <div className="form-row password-input-wrapper">
      {showLabel && (
        <label
          htmlFor={`${customClass}-password`}
          className="input-field-label"
        >
          password
        </label>
      )}
      <input
        className={`${customClass}-input`}
        id={`${customClass}-password`}
        name="password"
        type={isHide ? "password" : "text"}
        placeholder="Password"
      ></input>
      <img
        src={isHide ? showImg : hideImg}
        alt="hide eye"
        onClick={toggleHide}
      ></img>
    </div>
  );
}
