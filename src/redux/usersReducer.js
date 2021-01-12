const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERTS ='SETUSERTS';

let initialState = {
    users: [
            {id: 1, name: "Dima M", status: "I am a boss", followed: false, country: "Ukraine"},
            {id: 2, name: "Nastiya K", status: "Ya lublu", followed: false, country: "Ukraine"},
            {id: 3, name: "Alina B", status: "I am to", followed: false, country: "Ukraine"}
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followActionCreator = (id) => ({ type: FOLLOW, userId: id });
export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERTS, useers});

export default profileReducer;