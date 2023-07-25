import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsElements = props.messages.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.messages.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessageActionCreator();
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.updateNewMessageBody(message);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.messages.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
