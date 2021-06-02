import React from 'react';
import snakeFtyle from './snake.module.css';

export default (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return(
        <div className={snakeFtyle.snake_food} style={style}>
 
        </div>
    )
}