import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost(newPostElement.current.value);
  };

  return (
    <div className={styles.content_posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
}

export default MyPost;
