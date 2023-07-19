import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {

  let postsElements = props.posts.map((post) => (
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
