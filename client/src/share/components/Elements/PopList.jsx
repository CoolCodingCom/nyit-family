import Backdrop from "./Backdrop";
import "./PopList.css";

const PopList = (props) => {
  return (
    <>
			{props.show && <Backdrop onClick={props.onClick}/>}
      {props.show && (
        <ul className="poplist__container">
          {props.list.map((item) => (
            <li>
              <button type="button" onClick={item.onClickHandler}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PopList;
