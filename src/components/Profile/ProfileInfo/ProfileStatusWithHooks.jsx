import React, {useState, useEffect} from 'react';
// import s from './ProfileInfo.module.css';




const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [statusLocal, setStatus] = useState(props.status);   
    useEffect(() => {setStatus(statusLocal);}, [statusLocal])
    const activeEditMode = () => {setEditMode(true);}
    const diactiveEditMode = () => {setEditMode(false); props.updateStatus(statusLocal);}
    const onStatueChenge = (e) => {setStatus(e.currentTarget.value);}
   
        return (
            <div>
                { !editMode &&
                    <div>
                        <span onClick={activeEditMode}>{statusLocal || "--------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input  onChange={onStatueChenge} value={statusLocal}                               
                                autoFocus={true} onBlur={diactiveEditMode}                               
                          />
                    </div>
                }
            </div>
        )
    
}
export default ProfileStatusWithHooks;