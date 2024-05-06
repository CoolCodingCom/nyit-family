import { useActionData } from "react-router-dom";

export default function ErrorMessage() {
  const errorMessage = useActionData();
  const errorMsgStyle = {
    color: "red",
    margin: 0,
    fontSize: "1rem",
  };
  return (
    <div>{errorMessage && <h3 style={errorMsgStyle}>{errorMessage}</h3>}</div>
  );
}
