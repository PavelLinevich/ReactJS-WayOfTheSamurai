import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  return (
    <div className={styles.content_posts}>
      My posts
      <div>New posts</div>
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPost;
