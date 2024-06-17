import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { verifyEmail } from "../../apis/user";

const Verification = () => {
  const uString = useParams().uniqueString;
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const data = await verifyEmail(uString);
        setSuccessMessage(data.email);
      } catch (err) {
        setErrorMessage(err.message);
      }
    };
    sendRequest();
  }, []);

  return (
    <div>
      {!successMessage && !errorMessage && <h3>Verifying...</h3>}

      {successMessage && <h3>{successMessage} has been verified.</h3>}
      {errorMessage && <h3>Error: {errorMessage}</h3>}
      {(successMessage || errorMessage) && (
        <Link to="/login">To login page</Link>
      )}
    </div>
  );
};

export default Verification;
