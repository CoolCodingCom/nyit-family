import "../styles/signup.css";
import { Outlet } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup-page poppins-regular">
      <div className="signup-container">
        <Outlet />
      </div>
    </div>
  );
}
