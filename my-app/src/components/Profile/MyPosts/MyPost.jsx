import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.content_posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
}

export default MyPost;
