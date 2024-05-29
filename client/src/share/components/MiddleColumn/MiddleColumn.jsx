import PostForm from "./NewPost/PostForm";
import PostList from "./Posts/PostList";

import "./MiddleColumn.css";

const MiddleColumn = (props) => {
  return (
    <div className="middlecol__container">
      <PostForm />
      <PostList />
    </div>
  );
};

export default MiddleColumn;
