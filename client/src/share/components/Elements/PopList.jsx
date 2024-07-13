import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";
import "./PopList.css";

const PopList = (props) => {
  return (
    <>
      {props.show && !props.nobackdrop && <Backdrop onClick={props.onClick} />}
      {props.show && (
        <ul
          className="poplist__container"
          style={{
            top: `${props.posTop}px`,
            right: `${props.posRight}px`,
            width: props.width && `${props.width}px`,
          }}
        >
          {props.istext &&
            props.list.map((item, index) => (
              <li key={index}>
                <button
                  className={`${
                    index === 0 ? "poplist__container-first" : ""
                  } ${
                    index === props.list.length - 1
                      ? "poplist__container-last"
                      : ""
                  }`}
                  type="button"
                  onClick={item.onClickHandler}
                >
                  {item.name}
                </button>
              </li>
            ))}
          {props.isprofile &&
            props.list.map((item, index) => (
              <li key={index}>
                {/* <button
                  className={`${
                    index === 0 ? "poplist__container-first" : ""
                  } ${
                    index === props.list.length - 1
                      ? "poplist__container-last"
                      : ""
                  }`}
                  type="button"
                  onClick={item.onClickHandler}
                >
                  {item.name}
                </button> */}
                <NavLink className="peopleitem__container" to={props.path}>
                  <div className="peopleitem__avadar">
                    <img src={item.image} />
                  </div>
                  <div className="peopleitem__profile">
                    <div className="peopleitem__profile-name">
                      {item.username}
                    </div>
                    <div className="peopleitem__profile-id">{item.userid}</div>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default PopList;
