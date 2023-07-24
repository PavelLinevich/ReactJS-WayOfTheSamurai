import React from "react";
import MyPost from "./MyPost";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

function MyPostContainer(props) {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPost updateNewPostText={onPostChange}
      onAddPost={onAddPost}
      posts={props.store.getState().profile.posts}
      newPostText={state.newPostText} />
  );
}

export default MyPostContainer;
