import { connect } from "react-redux";
import Friends from './Friends';
import {followAC, unfollowAC,setUsersAC,updateNewMessageBodyCreator,sendMsssageCreater} 
from '../../redux/friends-reduser';

let mapStateToProps = (state) => { 
    return { 
      users: state.friendsPage.users,
      dialogPage: state.dialogPage,
      newMessageBody:state.dialogPage.newMessageBody
      
  }}
  
  let mapDispatchToProps = (dispatch) => { return {
      follow: (userId) =>{
        dispatch(followAC(userId));
        },
      unfollow: (userId) =>{
          dispatch(unfollowAC(userId));
          },
      setUsers: (users) =>{
        dispatch(setUsersAC(users));
        },
      updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body));
            },
         
       sendMsssage: () => {
            dispatch(sendMsssageCreater());
             }
     }
  }

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer