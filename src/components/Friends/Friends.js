import React from 'react';
import styles from './Friends.module.css';
//import *as axios from 'axios';

let Friends = (props) => {
    if(props.users.length === 0){
        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        // .then(response => {
        //      props.setUsers(response.data.items);
        // })
    }
    return (
        <div className={ styles.gridStyle10}>
            <div>
                      {
               props.users.map((u) => {
                 return <div key={u.id}className={ styles.gridStyle} >
                    <span className={ styles.gridStyle1}>
                        <div className={ styles.imagen}>
                            <img src="/img/21.png" alt=""width="85%" />
                        </div>
                           <span className={ styles.nameStatus}>
                               <div>
                                   <div> {u.fulname}</div> 
                               </div>
                               <div>
                                   <div> {u.status}</div> 
                               </div>
                           </span>

                           <span className={ styles.gridStyle3}> 
                               <div>
                                   <div> {u.location.city}</div> 
                               </div>
                               <div>
                                  <div> {u.location.country}</div> 
                               </div>

                           </span>
                    </span>
                           
                  
                        
                   

                       </div>
                   })
               }




            </div>
         
        <div>
        <span className={ styles.gridStyle2}>
                           <div className={styles.textareaStyle}> 
                           {  props.dialogPage.messages.map(el =>( <div>    {el.id}   {el.message} 
                                                    </div>  
                                              
                 ))    } 
                            
                            
                            
                            
                            
                             </div>
                       
                        </span>
               <div>
                    <textarea  value={props.newMessageBody}   placeholder="Enter new message"
                        onChange={ (e) =>{ let body = e.target.value; props.updateNewMessageBody(body)}}>
                        </textarea>
                </div>
                                        
                <div>
       
                          <button onClick={() => {
                            props.sendMsssage()
                        }  }>Add post</button>
               </div>  
        </div>
                                  



        </div>
    )
}
export default Friends;