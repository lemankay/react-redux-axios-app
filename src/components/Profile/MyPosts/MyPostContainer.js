import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reduser';
import {connect} from 'react-redux';
 


let mapStateToProps = (state) => { 
    return {      posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText                  
}}
let mapDispatchToProps = (dispatch) => { 
    return {
      addPost: (newPostText) =>{
        dispatch(addPostActionCreator(newPostText));},
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;