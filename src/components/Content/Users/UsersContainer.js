import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, setUsers, unfollowActionCreator, setCurrentPageActionCreator } from '../../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;