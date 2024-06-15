import { NavLink } from "react-router-dom";

import "./MediaArrange.css";

const MediaArrange = (props) => {
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <>
      {props.medialist.length === 1 && (
        <div className="media__arrange-image-one">
          {props.medialist[0] && (
            <NavLink to="/login" href="#">
              <img
                src={backendUrl + `/${props.medialist[0]}`}
                alt={props.medialist[0]}
              />
            </NavLink>
          )}
        </div>
      )}
      {props.medialist.length === 2 && (
        <div className="media__arrange-image-two">
					<div className="media__arrange-image-two-left">
          {props.medialist[0] && (
            <NavLink to="/login" href="#">
              <img
                src={backendUrl + `/${props.medialist[0]}`}
                alt={props.medialist[0]}
              />
            </NavLink>
          )}
					</div>
					<div className="media__arrange-image-two-right">
          {props.medialist[1] && (
            <NavLink to="/login" href="#">
              <img
                src={backendUrl + `/${props.medialist[1]}`}
                alt={props.medialist[1]}
              />
            </NavLink>
          )}
					</div>
        </div>
      )}
      {props.medialist.length === 3 && (
        <div className="media__arrange-image-three">
          <div className="media__arrange-image-three-left">
            {props.medialist[0] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[0]}`}
                  alt={props.medialist[0]}
                />
              </NavLink>
            )}
          </div>
          <div className="media__arrange-image-three-right">
            {props.medialist[1] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[1]}`}
                  alt={props.medialist[1]}
									style={{borderTopRightRadius:'18px'}}
                />
              </NavLink>
            )}
            {props.medialist[2] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[2]}`}
                  alt={props.medialist[2]}
									style={{borderBottomRightRadius:'18px'}}
                />
              </NavLink>
            )}
          </div>
        </div>
      )}
      {props.medialist.length === 4 && (
        <div className="media__arrange-image-four">
          <div className="media__arrange-image-four-both">
            {props.medialist[0] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[0]}`}
                  alt={props.medialist[0]}
									style={{borderTopLeftRadius:'18px'}}
                />
              </NavLink>
            )}
            {props.medialist[2] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[2]}`}
                  alt={props.medialist[2]}
									style={{borderBottomLeftRadius:'18px'}}
                />
              </NavLink>
            )}
          </div>
          <div className="media__arrange-image-four-both">
            {props.medialist[1] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[1]}`}
                  alt={props.medialist[1]}
									style={{borderTopRightRadius:'18px'}}
                />
              </NavLink>
            )}
            {props.medialist[3] && (
              <NavLink to="/login" href="#">
                <img
                  src={backendUrl + `/${props.medialist[3]}`}
                  alt={props.medialist[3]}
									style={{borderBottomRightRadius:'18px'}}
                />
              </NavLink>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaArrange;
