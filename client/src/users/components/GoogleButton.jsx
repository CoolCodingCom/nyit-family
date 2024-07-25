import googleIcon from "../../assets/google.svg";

export default function GoogleButton({ customClass, children }) {
  const loginWithGoogleHandler = async () => {
    try {
      window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
    } catch (err) {
      return err.message;
    }
  };

  return (
    <>
      <button
        className={`${customClass} button-with-image`}
        type="button"
        onClick={loginWithGoogleHandler}
      >
        <img className="google-login-img" src={googleIcon} alt="google" />
        {children}
      </button>
    </>
  );
}
