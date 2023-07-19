import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";

function Profile(props) {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <MyPost posts={props.posts} />
    </div>
  );
}

export default Profile;
