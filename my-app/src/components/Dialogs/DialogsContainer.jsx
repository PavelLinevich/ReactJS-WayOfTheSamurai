import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "./../../StoreContext"

function DialogsContainer(props) {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messages;

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (message) => {
          store.dispatch(updateNewMessageTextActionCreator(message));
        };

        return (
          <Dialogs updateNewMessageBody={onMessageChange}
            addMessageActionCreator={onAddMessage}
            messages={state} />
        )
      }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
