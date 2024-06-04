import Cbutton from "../../Elements/Cbutton";

import "./Attribute.css";

const Attribute = props => {
  return (
    <div className="attribute__container">
      <Cbutton className="attribute__btn" image={props.image} alt={props.alt} />
			{props.onlyicon && <div className="attribute__number">{props.number}</div>}
			{props.onlyicon && <div className="attribute__gap"></div>}
    </div>
  );
};

export default Attribute;
