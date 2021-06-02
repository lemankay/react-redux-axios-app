import React from 'react';
import snakeFtyle from './snake.module.css';

export default (props) => {
    return(
        <div>
            {props.snakeDots.map((dot,i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return(
                    <div className={snakeFtyle.snake_dot}
                         key={i}
                         style={style}     ></div>
                )
            })}
        </div>
    )
}