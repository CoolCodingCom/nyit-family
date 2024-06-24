import "./Cbutton.css";

const Cbutton = (props) => {
  return (
    <button className="button" type="button" disabled={props.disabled} onClick={props.onClick}>
      <img src={props.image} />
      <span className="button__alt">{props.alt}</span>
    </button>
  );
};

export default Cbutton;
