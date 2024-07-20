import { useState } from "react";
import AccountList from "./AccountLIst";

import "./AccountControl.css";
import { useUserInfo } from "../../../../context/user-info-context";

const AccountControl = (props) => {
  const { userInfo } = useUserInfo();

  const [moreIsShow, setMoreIsShow] = useState(false);

  const showListHandler = () => {
    setMoreIsShow((moreIsShow) => !moreIsShow);
  };

  const onDeleteShowHandler = () => {
    setIsScrollDisabled(true);
    showListHandler();
    setModalIsShow((modalIsShow) => !modalIsShow);
  };

  return (
    <div className="accountcontrol__container">
      {moreIsShow && (
        <AccountList
          show={moreIsShow}
          posTop={props.posTop}
          posRight={props.posRight}
          onClick={showListHandler}
          onDeleteShow={onDeleteShowHandler}
        />
      )}
      <button className="accountcontrol__button" onClick={showListHandler}>
        <div className="accountcontrol__avadar">
          {/* <img src={props.image} /> */}
          <img src={userInfo.image} />
        </div>
        {props.username && (
          <>
            <div className="accountcontrol__profile">
              <div className="accountcontrol__profile-name">
                {props.username}
              </div>
              <div className="accountcontrol__profile-id">@{props.userid}</div>
            </div>
            <span className="accountcontrol__decoration">...</span>
          </>
        )}
      </button>
    </div>
  );
};

export default AccountControl;
