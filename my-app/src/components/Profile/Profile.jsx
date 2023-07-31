import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

function Profile(props) {
  return (
    <div className={styles.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostContainer />
    </div>
  );
}

export default Profile;
