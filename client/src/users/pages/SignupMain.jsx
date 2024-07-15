import { Link, redirect } from "react-router-dom";
import SignupForm from "../components//SignupForm";
import GoogleButton from "../components/GoogleButton";
import { signUpUser } from "../../apis/user";

export async function action({ request }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const formData = await request.formData();
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const image = `${backendUrl}/uploads/defaultAvadar.svg`;
  try {
    const data = await signUpUser({ name, email, password, image });
    return redirect(`verification?email=${data.email}`);
  } catch (err) {
    return err.message;
  }
}

export default function SignupMain() {
  return (
    <>
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
    </>
  );
}
