import googleIcon from "../../assets/google.svg";

export default function GoogleButton({ customClass, children }) {
  return (
    <>
      <button className={`${customClass} button-with-image`} type="button">
        <img className="google-login-img" src={googleIcon} alt="google" />
        {children}
      </button>
    </>
  );
}
