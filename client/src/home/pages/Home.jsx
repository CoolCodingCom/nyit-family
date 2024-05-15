import { useEffect } from "react";

export default function Home() {
  const backendUrl = "http://localhost:5000";

  useEffect(() => {
    const storedData = localStorage.getItem("token");
    const sendRequest = async () => {
      try {
        const response = await fetch(
          backendUrl + "/api/auth/google/login/success",
          {
            credentials: "include",
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
      } catch (error) {}
    };
    
    if (!storedData) {
      sendRequest();
    }
  }, []);

  return <div className="home-container">HomePage</div>;
}
