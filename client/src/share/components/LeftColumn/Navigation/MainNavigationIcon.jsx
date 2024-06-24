// import { ReactComponent as Logo } from "./svg/logo.svg";
import NavigationLink from "./NavigationLink";

import "./MainNavigation.css";

const MainNavigationIcon = (props) => {
  return (
    <div className="navigation__container">
      <nav>
        <NavigationLink url="/" handle="logo" />
        <NavigationLink url="/" handle="home" />
        <NavigationLink url="/login" handle="explore" />
        <NavigationLink
          url="/login"
          handle="notifications"
        />
        <NavigationLink url="/login" handle="messages" />
        <NavigationLink url="/login" handle="bookmarks" />
        <NavigationLink url="/profile" handle="profile" />
        <NavigationLink
          url="/login"
          handle="settingandprivacy"
        />
      </nav>
      <div className="navipost__btn">
        <button type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default MainNavigationIcon;
