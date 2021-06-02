import { usersAPI } from '../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNTAC = "SET_TOTAL_USERS_COUNTAC";
const TOGGLE_ISFETCHING = "STOGGLE_ISFETCHING";
const TOGGLE_IS_FOLLOWNG_PROGRES = "TOGGLE_IS_FOLLOWNG_PROGRES";
let initialstate = {
    users: [
        {
            id: 1, followed: false, photos: "/img/21.png", fulname: "leman", status: "I am a boss"
            , location: { city: "Boston", country: "USA" }
        },
        {
            id: 2, followed: true, photos: "/img/images.jpg", fulname: "Zera", status: "I am a boss too"
            , location: { city: "Moskva", country: "PUSSIA" }
        },
        {
            id: 3, followed: false, photos: "/img/bird01.png", fulname: "lenie", status: "I am a boss too"
            , location: { city: "Minsk", country: "BELARUS" }
        },
        {
            id: 3, followed: false, photos: "/img/images (2).jpg", fulname: "Pera", status: "I am a boss too"
            , location: { city: "Parish", country: "FRANCE" }
        }

    ],
    pageSize: 1,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};
let usersReduser = (state = initialstate, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    return u.id === action.userId ? { ...u, followed: true } : u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    return u.id === action.userId ? { ...u, followed: false } : u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }


        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNTAC:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_ISFETCHING:
            return { ...state, isFetching: action.toggle }
        case TOGGLE_IS_FOLLOWNG_PROGRES:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return state;
    }
}




export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (current) => ({ type: SET_CURRENT_PAGE, currentPage: current });
export const setTotalUsersCounte = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNTAC, count: totalUsersCount });
export const toggleIsfetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, toggle: isFetching });
export const togglefollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWNG_PROGRES, isFetching, userId
});
export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsfetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsfetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCounte(data.totalCount));
            });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
               if (response.data.resultCode === 0){dispatch.followSuccess(userId); }
                dispatch.togglefollowingInProgress(false, userId);
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, userId));
          usersAPI.unfollow(userId)
            .then(response => {
               if (response.data.resultCode === 0){dispatch.unfollowSuccess(userId); }
                dispatch.togglefollowingInProgress(false, userId);
            });
    }
}
export default usersReduser;