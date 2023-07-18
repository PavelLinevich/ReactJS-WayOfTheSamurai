import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72CieCp5OLNMFi5gW2RRYh64XEtRWVK64isnxvxdnKHT9pmGU9eOZOetnqK_CEzRtmNQ&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>{props.likes} like</span>
      </div>
    </div>
  );
}

export default Post;
