import MyPost from "./MyPost";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    onAddPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
