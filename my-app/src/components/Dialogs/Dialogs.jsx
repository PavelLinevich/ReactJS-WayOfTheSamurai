import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

function Dialog_item(props) {
  return (
    <div className={styles.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

function Message(props) {
  return <div className={styles.message}>{props.message}</div>;
}

function Dialogs(props) {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <Dialog_item name="Dima" id="1" />
        <Dialog_item name="Andrey" id="2" />
        <Dialog_item name="Sveta" id="3" />
        <Dialog_item name="Sasha" id="4" />
        <Dialog_item name="Viktor" id="5" />
        <Dialog_item name="Valera" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Cool!" />
      </div>
    </div>
  );
}

export default Dialogs;
