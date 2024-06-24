import Backdrop from "./Backdrop";
import "./PopList.css";

const PopList = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onClick} />}
      {props.show && (
        <ul
          className="poplist__container"
          style={{
            top: `${props.posTop}px`,
            right: `${props.posRight}px`,
            width: props.width && `${props.width}px`,
          }}
        >
          {props.list.map((item, index) => (
            <li>
              <button
                className={`${index === 0 && "poplist__container-first"} ${
                  index === props.list.length - 1 && "poplist__container-last"
                }`}
                type="button"
                onClick={item.onClickHandler}
              >
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
