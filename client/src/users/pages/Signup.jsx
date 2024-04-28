import "../styles/signup.css";
import { Link, redirect } from "react-router-dom";
import { signUpUser } from "../../apis";
import SignupForm from "../components//SignupForm";
import GoogleButton from "../components/GoogleButton";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const image = "/fakeImgUrl";
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
  try {
    const data = await signUpUser({ name, email, password, image });
    localStorage.setItem("token", data.token);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

export default function Signup() {
  return (
    <div className="signup-page poppins-regular">
      <div className="signup-container">
        <h1 className="signup-title">Create Account</h1>
        <div className="signup-content">
          <GoogleButton customClass="signup-button">
            Sign up with Google
          </GoogleButton>
          <span>-OR-</span>
          <SignupForm />
          <div className="bottom-log-in">
            <span>Already have an account? </span>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
