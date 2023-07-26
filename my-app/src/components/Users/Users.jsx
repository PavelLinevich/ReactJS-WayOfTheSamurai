import React from "react";
import styles from "./Users.module.css";
import axios from 'axios';
import userPhoto from "./../../assets/images/user-image.png";

let Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
        // props.setUsers([
        //   {
        //     id: 1,
        //     photoUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/220801574_862446484370472_4416362489792316557_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=w1vFyjS_oKwAX9h4Bq2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfDAbG9S8etSHrnUUWF9y8RFMpJ9YZM2T_0D6HYqp3ycjA&oe=64E75450",
        //     followed: true,
        //     fullName: "Dmitry",
        //     status: "I am a bose",
        //     location: {
        //       city: "Minsk",
        //       country: "Belarus",
        //     }
        //   },
        //   {
        //     id: 2,
        //     photoUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/62109755_416081632310909_2596444005449334784_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MUrrQAqfWqUAX-xputA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfCTTwhJgESDHguDBMNOahs5VhviaCsOYvKh5sfe-W0K5g&oe=64E76C35",
        //     followed: false,
        //     fullName: "Pablo",
        //     status: "I am a macho",
        //     location: {
        //       city: "San Diego",
        //       country: "Mexico",
        //     }
        //   },
        // ]);
      });


  }

  return <div>
    {
      props.users.map((user) => <div key={user.id}>
        <span>
          <div>
            <img src={user.photos.small != null ? user.photo.small : userPhoto} className={styles.userPhoto} alt="ava" />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;