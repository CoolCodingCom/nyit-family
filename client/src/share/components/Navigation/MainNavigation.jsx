// import { ReactComponent as Logo } from "./svg/logo.svg";
import NavigationLink from "./NavigationLink";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <nav>
      {/* <Logo className="logo" /> */}
      <NavigationLink url="/" name="Home" handle="home" />
      <NavigationLink url="/login" name="Explore" handle="explore" />
      <NavigationLink url="/login" name="Notifications" handle="notifications" />
      <NavigationLink url="/login" name="Messages" handle="messages" />
      <NavigationLink url="/login" name="Bookmarks" handle="bookmarks" />
      <NavigationLink url="/login" name="Profile" handle="profile" />
      <NavigationLink
        url="/login"
        name="Setting and Privacy"
        handle="settingandprivacy"
      />
      <NavigationLink url="/signup" name="Signup" />
    </nav>
  );
};

export default MainNavigation;
