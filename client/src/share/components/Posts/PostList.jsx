import PostItem from "./PostItem";


const PostList = () => {
  const content = "Marco is in a big hungry !!  Marco is in a big hungry !!  Marco is in a big hungry !!  Marco is in a big hungry !!"
  return <PostItem userid="@Marco12345" username="Marco" timestamp="3 hours ago" text={content}/>
}

export default PostList;