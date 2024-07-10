import { NavLink } from "react-router-dom";

export default function ProfileNav() {
  const activeNavStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "400",
    borderBottom: isActive ? "4px solid rgb(29, 155, 240)" : "none",
  });

  return (
    <div className="profile__navbar poppins-regular">
      <NavLink to="" end style={activeNavStyle} replace>
        Posts
      </NavLink>
      <NavLink to="replies" style={activeNavStyle} replace>
        Replies
      </NavLink>
      <NavLink to="subs" style={activeNavStyle} replace>
        Subs
      </NavLink>
      <NavLink to="highlights" style={activeNavStyle} replace>
        Highlights
      </NavLink>
      <NavLink to="media" style={activeNavStyle} replace>
        Media
      </NavLink>
    </div>
  );
}
