import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

function ProfileInfo(props) {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.profile_info}>
      {/* <div className={styles.content_img}></div> */}
      <div className={styles.userProfile}>
        <img className={styles.userProfileImage} src={props.profile.photos.small} alt='ava'/>
        <div className={styles.userProfileFullName}>{props.profile.fullName}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
