import React from "react";
import MyPost from "./MyPost";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "./../../../StoreContext"

function MyPostContainer(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPost updateNewPostText={onPostChange}
            onAddPost={onAddPost}
            posts={store.getState().profile.posts}
            newPostText={state.newPostText} />
        )
      }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostContainer;
