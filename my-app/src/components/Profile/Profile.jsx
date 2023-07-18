import React from "react";
import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";

function Profile(props) {
  return (
    <div>
      <div className={styles.content_img}></div>
      <div className={styles.content_ava}>Ava page</div>
      <MyPost />
    </div>
  );
}

export default Profile;
