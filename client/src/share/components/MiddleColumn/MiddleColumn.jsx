import PostForm from "./NewPost/PostForm";
import PostList from "./Posts/PostList";

const MiddleColumn = (props) => {
  return (
    <div>
      <PostForm />
      <PostList />
    </div>
  );
};

export default MiddleColumn;
