import MiddleColumn from "../../share/components/MiddleColumn/MiddleColumn";
import RightColumn from "../../share/components/RightColumn/RightColumn";
import PostForm from "../../share/components/MiddleColumn/NewPost/PostForm";
import PostList from "../../share/components/MiddleColumn/Posts/PostList";
import { getHomePosts } from "../../apis/post";
import { useEffect, useState } from "react";

import "./Home.css";

export default function Home() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    getHomePosts()
      .then((data) => {
        setPostList(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <>
      <MiddleColumn>
        <div className="middlecol__head">
          <button>For you</button>
          <button>Following</button>
        </div>
        <PostForm />
        <PostList postList={postList} setPostList={setPostList} />
      </MiddleColumn>
      <RightColumn />
    </>
  );
}
