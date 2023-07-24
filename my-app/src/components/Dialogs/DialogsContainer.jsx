import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (message) => {
      dispatch(updateNewMessageTextActionCreator(message))
    },
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator())
    },
  }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
