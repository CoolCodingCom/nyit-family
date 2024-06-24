// import { ReactComponent as Logo } from "./svg/logo.svg";
import NavigationLink from "./NavigationLink";
import AccountControl from "./AccountControl/AccountControl";

import "./MainNavigation.css";

const MainNavigationLong = (props) => {
  return (
    <div className="navigation__container">
      <nav>
        <NavigationLink url="/" handle="logo" />
        <NavigationLink url="/" name="Home" handle="home" />
        <NavigationLink url="/login" name="Explore" handle="explore" />
        <NavigationLink
          url="/login"
          name="Notifications"
          handle="notifications"
        />
        <NavigationLink url="/login" name="Messages" handle="messages" />
        <NavigationLink url="/login" name="Bookmarks" handle="bookmarks" />
        <NavigationLink url="/profile" name="Profile" handle="profile" />
        <NavigationLink
          url="/login"
          name="Setting and Privacy"
          handle="settingandprivacy"
        />
      </nav>
      <div className="navipost__btn">
        <button type="submit">Post</button>
      </div>
      <div className="navigation__account">
        <AccountControl
          key={props.id}
          posTop={-120}
          posRight={15}
          username={props.username}
          userid={props.userid}
          // image={person.image}
        />
      </div>
    </div>
  );
};

export default MainNavigationLong;
