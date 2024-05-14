import googleIcon from "../../assets/google.svg";

export default function GoogleButton({ customClass, children, onClick }) {
  return (
    <>
      <button className={`${customClass} button-with-image`} type="button" onClick={onClick}>
        <img className="google-login-img" src={googleIcon} alt="google" />
        {children}
      </button>
    </>
  );
}
