import "./Cbutton.css";

const Cbutton = (props) => {
  return (
    <button className="button">
      <img src={props.image} />
    </button>
  );
};

export default Cbutton;
