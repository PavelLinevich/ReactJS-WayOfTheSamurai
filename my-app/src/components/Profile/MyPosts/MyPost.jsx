import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  let posts = [
    { id: 1, message: "Hello. How are you?", like: 2 },
    { id: 2, message: "HI! I am fine!", like: 5 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} likes={post.like} />
  ));

  return (
    <div className={styles.content_posts}>
      My posts
      <div>New posts</div>
      <div>{postsElements}</div>
    </div>
  );
}

export default MyPost;
