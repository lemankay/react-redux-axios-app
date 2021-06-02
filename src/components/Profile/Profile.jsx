import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';
import s from './MyPosts/MyPosts.module.css';


const Profile = (props) => {
        
    return (       
        <div className={s.postsBlock}>
            <div  className={s.profileBlock}> 
             <ProfileInfo profile={props.profile}
                          status={props.status}
                          updateStatus={props.updateStatus}/> </div>
              <MyPostContainer  store={props.store}  />
        </div>
    
      
    )
}

export default Profile;