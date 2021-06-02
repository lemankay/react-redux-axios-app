import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  
    return (   
                <div className={s.top}>
                     <div className={s.dialog}>{props.message}</div>
                </div>
    )
}

export default Message;