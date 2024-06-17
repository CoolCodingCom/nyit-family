import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className={`backdrop backdrop-${props.color}`} onClick={props.onClick}></div>;
};

export default Backdrop;
