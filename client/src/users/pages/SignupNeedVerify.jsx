import emailImg from "../../assets/email.svg";
import { useSearchParams } from "react-router-dom";

export default function SignupNeedVerify() {
  const [searchParams] = useSearchParams();
  const emailAddress = searchParams.get("email");
  return (
    <div className="signup-verification-container">
      <h2 className="verification-title">Verify your email</h2>
      <span>We have sent an email to {emailAddress || "hello"}.</span>
      <div>Check your email & click the link to activate your account.</div>
      <img src={emailImg} alt="email verification" />
    </div>
  );
}
