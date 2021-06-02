import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
                <div>
                        <img src="/img/click.png" alt="x"/>
                </div>  

                <div>
                      { props.message }
                </div>  
                                             
                <div>
                    <span>like</span> { props.likesCount }
                </div>
            
    </div>
      
    )
}

export default Post;