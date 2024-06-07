import PostForm from "./NewPost/PostForm";
import PostList from "./Posts/PostList";

import "./MiddleColumn.css";

const MiddleColumn = (props) => {
  return (
    <div className="middlecol__container">
      <div className="middlecol__head">
        <button>For you</button>
        <button>Following</button>
      </div>
      <PostForm />
      <PostList />
    </div>
  );
};

export default MiddleColumn;
