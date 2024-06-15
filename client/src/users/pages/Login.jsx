import { Link, redirect } from "react-router-dom";
import "../styles/login.css";
import loginIcon from "../../assets/loginIcon.svg";
import loginImage from "../../assets/loginImage.svg";
import { loginUser } from "../../apis";
import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import { updateUser } from "../../share/components/ProtectedRoute/AuthProvider";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);
    updateUser({ id: data.userId });
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
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
          <LoginForm />
          <div className="form-row" style={{ width: "60%" }}>
            <GoogleButton customClass="login-button light-purple">
              Log in with Google
            </GoogleButton>
          </div>
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
