import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Verification = () => {
  const uString = useParams().uniqueString;
  const backendUrl = "http://localhost:5000";

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(backendUrl + `/api/users/verify/${uString}`);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
      } catch (error) { }
    };
    sendRequest();
  }, []);

  return <div>Veification</div>;
}

export default Verification;