const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERTS ='SETUSERTS';
const SET_CURRENT_PAGE = 'SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [    ],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            };
        case SET_USERTS: {
            return {...state, users: action.users}
        };
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        };
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

export const followActionCreator = (id) => ({ type: FOLLOW, userId: id });
export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERTS, users});
export const setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page: page });
export const setToralUsersCountActionCreator = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUserCount });


export default usersReducer;