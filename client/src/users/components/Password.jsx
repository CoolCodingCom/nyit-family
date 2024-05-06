import { useState } from "react";
import hidePassword from "../../assets/hidePassword.svg";
import showPassword from "../../assets/showPassword.svg";
import whiteHidePassword from "../../assets/hidePassword-white.svg";
import whiteShowPassword from "../../assets/showPassword-white.svg";

export default function Password({
  customClass,
  eyeTheme,
  showLabel,
  patternEnabled,
}) {
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
        required
        pattern={
          patternEnabled
            ? "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
            : undefined
        }
        title={
          patternEnabled
            ? "Password must contain at least: one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long."
            : undefined
        }
      ></input>
      <img
        src={isHide ? showImg : hideImg}
        alt="hide eye"
        onClick={toggleHide}
      ></img>
    </div>
  );
}
