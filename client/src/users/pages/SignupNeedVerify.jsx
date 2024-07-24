import emailImg from "../../assets/email.svg";
import { useSearchParams } from "react-router-dom";

export default function SignupNeedVerify() {
  const [searchParams] = useSearchParams();
  const emailAddress = searchParams.get("email");
  return (
    <div className="signup-verification-container">
      <h2 className="verification-title">Verify your email</h2>

      <div>
        <span>We have sent an email to {emailAddress || "hello"}. </span>Please
        check your email & click the link to activate your account.
      </div>
      <div style={{ fontStyle: "italic" }}>
        Note: If you don't see the email, please check your spam or trash
        folders.
      </div>
      <img src={emailImg} alt="email verification" />
    </div>
  );
}
