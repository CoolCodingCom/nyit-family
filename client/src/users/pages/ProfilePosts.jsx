import PostList from "../../share/components/MiddleColumn/Posts/PostList";
import { useOutletContext } from "react-router-dom";
import { getPostByAuthor } from "../../apis/post";
import { useEffect, useState } from "react";

export default function ProfilePosts() {
  const [profileInfo, setProfileInfo] = useOutletContext();
  const [postList, setPostList] = useState();

  useEffect(() => {
    if (profileInfo.id) {
      getPostByAuthor(profileInfo.id)
        .then((data) => {
          setPostList(data.posts);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [profileInfo]);

  return (
    <>
      <PostList postList={postList} setPostList={setPostList}></PostList>
    </>
  );
}
