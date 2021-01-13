import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, setUsers, unfollowActionCreator } from '../../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;