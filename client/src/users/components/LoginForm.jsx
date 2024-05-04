import { Form } from "react-router-dom";
import Password from "./Password";
import ErrorMessage from "./ErrorMessage";

export default function LoginForm() {
  return (
    <Form method="post" className="login-form" replace>
      <div className="form-row login-email-row">
        <label htmlFor="login-email" className="input-field-label">
          Email
        </label>
        <input
          className="login-input"
          id="login-email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
      </div>

      <Password
        customClass="login"
        showLabel="true"
        eyeTheme="black"
      ></Password>

      <div className="below-password">
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" id="remember-30-days"></input>
          <label htmlFor="remember-30-days" style={{ fontSize: "smaller" }}>
            Remember for 30 days
          </label>
        </div>
        <span className="forget-password">Forgot password?</span>
      </div>
      <ErrorMessage />
      <div className="form-row login-button-row">
        <button className="login-button black">Log In</button>
      </div>
    </Form>
  );
}
