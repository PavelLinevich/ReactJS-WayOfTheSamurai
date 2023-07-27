import React from "react";
import axios from 'axios';
import Users from "./Users";
import { connect } from "react-redux";
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "./../../redux/users-reducer";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);