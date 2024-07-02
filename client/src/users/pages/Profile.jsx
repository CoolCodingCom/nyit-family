import "../styles/Profile.css";
import { useParams, Outlet } from "react-router-dom";
import RightColumn from "../../share/components/RightColumn/RightColumn";
import ProfileHead from "../components/ProfileHead";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNav from "../components/ProfileNav";

export default function Profile() {
  const param = useParams();
  console.log(param);

  return (
    <>
      <div className="middlecol__container">
        <ProfileHead></ProfileHead>

        <ProfileHeader></ProfileHeader>

        <div className="profile__content">
          <ProfileNav></ProfileNav>
          <Outlet />
        </div>
      </div>
      <RightColumn />
    </>
  );
}
