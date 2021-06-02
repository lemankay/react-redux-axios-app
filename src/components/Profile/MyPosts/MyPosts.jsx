import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field  name="newPostText"  
                    component={Textarea}
                    placeholder="Enter new post"
                    validate={ [required,  maxLength10] }          
            />
            <button>Add post</button>
        </div>
    </form>
    )
}
const AddNewPostFormRedux = reduxForm({form:'ProfileAddPostForm'})(AddNewPostForm)

const MyPosts = (props) => {  
  let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={s.postsBlock}>
                    <h3>My posts</h3>
                   < AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {  props.posts.map((p) => 
                    <Post 
                        key={p.id}
                        message={p.message}
                        likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}






export default MyPosts;