import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import *as axios from 'axios';
import { usersAPI } from '../../api/api';


let Users = (props) => {
  
        let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i=1; i<= pagesCounter; i++){
            pages.push(i);
        }

   return <div>
            <div className={styles.cursorPointer}>
                { pages.map(p=>{       
                   return  <span className={props.currentPage === p && styles.selectedPage} 
                                 onClick={(e)=>{props.opPageChenge(p);}} > {p}
                           </span>

                      })}
              
            </div>
               
          {  props.users.map((u) => {
            
              return <div key={u.id} className={ styles.gridStyle} >
            
                     <span>
                        <div className={ styles.imagen}>
                            <NavLink to={'/profile/'+ u.id}>
                                 <img src={u.photos.small !=null ? u.photos.small
                                  : props.userPhoto} alt=""width="85%" 
                                className={styles.userPhoto} />
                            </NavLink>
                           
                        </div>
                <div> {u.followed 
                    ? <button disabled={props.followingInProgress.some(id=>id===u.id)}
                     onClick={()=>{props.unfollow(true,u.id); }}>Unfollow</button>           
                    : <button disabled={props.followingInProgress.some(id=>id===u.id)}
                     onClick={()=>{ props.follow(true,u.id);  }}> Follow</button>              
                }
                    
                </div>
                     </span>
                           
                        <span className={ styles.gridStyle2}>
                             <span className={ styles.nameStatus}>
                               <div>
                                   <div> {u.fulname}</div> 
                               </div>
                               <div>
                                   <div> {u.status}</div> 
                               </div>
                           </span>

                           <span > 
                               <div>
                                   <div> {u.location.city}</div> 
                               </div>
                               <div>
                                  <div> {u.location.country}</div> 
                               </div>

                           </span>
                        </span>
                    
               

                       </div>
              
                   }
                   )
               }
        </div>
    
    
   
}
export default Users;