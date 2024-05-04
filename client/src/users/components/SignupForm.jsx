import { Form } from "react-router-dom";
import Password from "./Password";
import ErrorMessage from "./ErrorMessage";

export default function SignupForm() {
  return (
    <Form method="post" className="signup-form" replace>
      <div className="form-row">
        <input
          className="signup-input"
          name="fullname"
          type="text"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="form-row">
        <input
          className="signup-input"
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />
      </div>

      <Password
        customClass="signup"
        eyeTheme="white"
        patternEnabled="true"
      ></Password>
      <div className="form-row">
        <input
          id="imageInput"
          className="signup-input"
          name="image"
          type="file"
          required
        />
      </div>
      <ErrorMessage />
      <div className="form-row">
        <button className="create-account-button">Create Account</button>
      </div>
    </Form>
  );
}
