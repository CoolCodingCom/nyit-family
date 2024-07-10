import { NavLink } from "react-router-dom";

export default function ProfileNav() {
  const activeNavStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "400",
    borderBottom: isActive ? "4px solid rgb(29, 155, 240)" : "none",
  });

  return (
    <div className="profile__navbar poppins-regular">
      <NavLink to="" end style={activeNavStyle}>
        Posts
      </NavLink>
      <NavLink to="replies" style={activeNavStyle}>
        Replies
      </NavLink>
      <NavLink to="subs" style={activeNavStyle}>
        Subs
      </NavLink>
      <NavLink to="highlights" style={activeNavStyle}>
        Highlights
      </NavLink>
      <NavLink to="media" style={activeNavStyle}>
        Media
      </NavLink>
    </div>
  );
}
