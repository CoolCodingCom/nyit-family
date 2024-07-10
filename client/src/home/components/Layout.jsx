import { Outlet } from "react-router-dom";
import LeftColumn from "../../share/components/LeftColumn/LeftColumn";
import { UserInfoProvider } from "../../share/context/user-info-context";
import "./Layout.css";

export default function Layout() {
  return (
    <UserInfoProvider>
      <div className="main-container">
        <LeftColumn />
        <Outlet />
      </div>
    </UserInfoProvider>
  );
}
