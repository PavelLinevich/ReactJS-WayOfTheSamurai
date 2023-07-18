import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  return (
    <div className={styles.content_posts}>
      My posts
      <div>New posts</div>
      <div>
        <Post message="Hello. How are you?" likes="2"/>
        <Post message="HI! I am fine!" likes="5"/>
      </div>
    </div>
  );
}

export default MyPost;
