import Attribute from "./Attribute";

import ReplyIcon from "./svg/reply.svg";
import LikeIcon from "./svg/like.svg";
import RepostIcon from "./svg/repost.svg";
import ViewIcon from "./svg/view.svg";
import BookmarkIcon from "./svg/bookmark.svg";
import ShareIcon from "./svg/share.svg";
import "./AttributeList.css";

const AttributeList = props => {
  return (
    <div className="attributelist">
      <Attribute image={ReplyIcon} number="1k" onlyicon="true"/>
      <Attribute image={LikeIcon} number="1k" onlyicon="true"/>
      <Attribute image={RepostIcon} number="1k" onlyicon="true"/>
      <Attribute image={ViewIcon} number="1k" onlyicon="true"/>
      <Attribute image={BookmarkIcon} number="1k" />
      <Attribute image={ShareIcon} number="1k" />
    </div>
  );
};

export default AttributeList;