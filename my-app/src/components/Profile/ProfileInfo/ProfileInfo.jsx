import React from "react";
import styles from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div className={styles.profile_info}>
      <div className={styles.content_img}></div>
      <div className={styles.content_ava}>Ava page</div>
    </div>
  );
}

export default ProfileInfo;
