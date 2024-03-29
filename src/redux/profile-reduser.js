import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = "ADD_POST"; 
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialstate = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ],
   
    profile: '/img/images (4).jpg',
    status: ''
      
}

const profileReduser = (state=initialstate, action) => { 
    switch(action.type){
       case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount:0
            };         
            return {
                ...state,
                 posts: [...state.posts, newPost],
                  newPostText: ''
            };       
   
          case SET_STATUS:
              return {
                  ...state,
                  status: action.status
              } 
     case SET_USER_PROFILE:
          return {
              ...state,
              profile: action.profile
          }    
          
        default:
                return state;
      }       
    }
   

export default profileReduser;

export const addPostActionCreator = (newPostText) =>({type: ADD_POST,newPostText})

export const setUserProfile = (profile) =>({type:  SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS,status})

export const getUserProfile = (userId) =>{
  return (dispatch)=>{
    usersAPI.getProfile(userId)
     .then(response => {
        dispatch.setUserProfile(response.data);
         });
      }
};
export const getStatus = (userId) =>{
    return (dispatch)=>{
      profileAPI.getStatus(userId)
       .then(response => {
          dispatch.setStatus(response.data);
           });
        }
  };
  export const updateStatus = (status) =>{
    return (dispatch)=>{
      profileAPI.updateStatus(status)
       .then(response => {
           if(response.data.resultCode === 0){
                dispatch.setStatus(status);
           }
         
           });
        }
  };
