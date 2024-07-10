import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    userid: "@Marco12345",
    username: "Marco",
    timestamp: "3 hours ago",
    content:
      "Marco is in a big hungry !!  Marco is in a big hungry !!  Marco is in a big hungry !!  Marco is in a big hungry !!",
  },
  {
    userid: "@Amy56789",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy5678",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy567",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy56",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy5",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
];

const PostList = ({ postList, setPostList }) => {
  const postDeleteHandler = (deletedPid) => {
    setPostList((prevPosts) =>
      prevPosts.filter((post) => post._id !== deletedPid)
    );
  };

  return (
    <div>
      {postList &&
        postList.map((post) => (
          <PostItem
            key={post._id}
            id={post._id}
            userid={post.userid}
            username={post.username}
            timestamp={post.createdAt}
            text={post.content}
            medialist={post.media}
            onDelete={postDeleteHandler}
          />
        ))}
    </div>
  );
};

export default PostList;
