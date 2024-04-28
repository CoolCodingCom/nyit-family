import { Form } from "react-router-dom";
import Password from "./Password";

export default function LoginForm() {
  return (
    <Form method="post" className="signup-form" replace>
      <div className="form-row">
        <input
          className="signup-input"
          name="fullname"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="form-row">
        <input
          className="signup-input"
          name="email"
          type="email"
          placeholder="Email Address"
        />
      </div>

      <Password customClass="signup" eyeTheme="white"></Password>

      <div className="form-row">
        <button className="create-account-button">Create Account</button>
      </div>
    </Form>
  );
}
