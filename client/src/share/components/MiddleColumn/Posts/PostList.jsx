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
    userid: "@Amy56789",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy56789",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy56789",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
  {
    userid: "@Amy56789",
    username: "Amy",
    timestamp: "2 days ago",
    content: "Amy is a watermelon!",
  },
];

const PostList = () => {
  return (
    <div>
      {DUMMY_POSTS.map((post) => (
        <PostItem
          userid={post.userid}
          username={post.username}
          timestamp={post.timestamp}
          text={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;