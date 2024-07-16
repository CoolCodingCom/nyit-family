import "../styles/Profile.css";
import { useParams, Outlet } from "react-router-dom";
import MiddleColumn from "../../share/components/MiddleColumn/MiddleColumn";
import RightColumn from "../../share/components/RightColumn/RightColumn";
import ProfileHead from "../components/ProfileHead";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNav from "../components/ProfileNav";
import { useUserInfo } from "../../share/context/user-info-context";
import { useState, useEffect } from "react";
import { getUserById } from "../../apis/user";

export default function Profile() {
  const param = useParams();
  const { userInfo } = useUserInfo();
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    if (param.id === userInfo.id) {
      setProfileInfo(userInfo);
    } else {
      getUserById(param.id)
        .then((data) => {
          setProfileInfo(data.user);
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (param.id === userInfo.id) {
      setProfileInfo(userInfo);
    }
  }, [userInfo]);

  return (
    <>
      <MiddleColumn>
        <ProfileHead profileInfo={profileInfo}></ProfileHead>

        <ProfileHeader profileInfo={profileInfo}></ProfileHeader>

        <div className="profile__content">
          <ProfileNav></ProfileNav>
          <Outlet context={[profileInfo, setProfileInfo]} />
        </div>
      </MiddleColumn>
      <RightColumn />
    </>
  );
}
