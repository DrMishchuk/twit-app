import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, setUsers, unfollowActionCreator, setCurrentPageActionCreator, setToralUsersCountActionCreator, setIsFetchingActionCreator } from '../../../redux/usersReducer';
import axios from 'axios';
import preloader from '../../../assets/images/preloader.gif';

class UsersAPIContainer extends React.Component{
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    
    onPageChange = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);
        });
    }
    
    render(){
        debugger
        return <>
        { this.props.isFetching ? <img src={preloader}/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      onPageChange = {this.onPageChange}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      users = {this.props.users}
                      currentPage = {this.props.currentPage}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUser: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        }, 
        setTotalUsersCount: (totalCount) => {
            dispatch(setToralUsersCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;