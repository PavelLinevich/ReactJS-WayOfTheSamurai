import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.content}>
        <div className={styles.content_img}></div>
        <div className={styles.content_ava}>
          Ava page
        </div>
        <div className={styles.content_posts}>
          My posts
          <div>New posts</div>
          <div>
            <div>Post1</div>
            <div>Post2</div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
