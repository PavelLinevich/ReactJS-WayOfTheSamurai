import Users from "./Users"
import { connect } from "react-redux";
import { setUsersAC, followAC, unfollowAC} from "./../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);