import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

function DialogsContainer(props) {
  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (message) => {
    props.store.dispatch(updateNewMessageTextActionCreator(message));
  };

  return (
    <Dialogs updateNewMessageBody={onMessageChange}
      addMessageActionCreator={onAddMessage}
      messages={props.store.getState().messages} />
  );
}

export default DialogsContainer;
