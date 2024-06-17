import { useActionData, useSearchParams } from "react-router-dom";

export default function ErrorMessage() {
  const errorMessage = useActionData();
  const [searchParams] = useSearchParams();
  const otherMessage = searchParams.get("message");
  const errorMsgStyle = {
    color: "red",
    margin: 0,
    marginBottom: "1rem",
    fontSize: "1rem",
  };
  return (
    <div>
      {errorMessage && <h3 style={errorMsgStyle}>{errorMessage}</h3>}
      {otherMessage && <h3 style={errorMsgStyle}>{otherMessage}</h3>}
    </div>
  );
}
