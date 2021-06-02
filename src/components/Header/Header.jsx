import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
           <header className={s.header}>   

                    <div>
                            <img src="http://www.freelogodesign.org/Content/img/logo-ex-7.png"  alt="run" />   
                    </div> 
                 

               <div className={s.lem}>
           <h1>L</h1><h1>E</h1><h1>M</h1><h1>A</h1><h1>N</h1>
               </div> 
                
   <div className={s.loginBlock}>
            {props.isAuth ? 
                <div> {props.login} 
                   <button onClick={props.logout}>log out</button> 
                </div> :
               <NavLink to={'/login'}>Login</NavLink>
             }
                  <button onClick={props.logout}>log out</button>
                    </div>
                   
                  
                                                    
           </header>               
    )
}

export default Header;