import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



class  ProfileInfo extends React.Component {
  state = {
    currentImageIndex: 0,
    imageUrl: [
      '/img/see.png',
      '/img/images.jpg',
      '/img/images (4).jpg',
      '/img/images (2).jpg',
      '/img/images (3).jpg'
    ],
  getImag(){return this.imageUrl[this.currentImageIndex]}
  }
 
  onShowPrevBtn = () => {  
    this.setState({currentImageIndex: this.state.currentImageIndex - 1}) 
  
 }  
  onShowNextBtn = () => {
    this.setState({currentImageIndex: this.state.currentImageIndex + 1}) 
   
 }
  render(){  
     return ( <div>
                 <div className={s.see}> <img src={this.state.getImag()}  alt="see" className={s.btnImg}/></div> 

                 <div className={s.btn}>  <button onClick={this.onShowPrevBtn} className={s.btnPrev}>PREV</button>
               
                        <button onClick={this.onShowNextBtn}className={s.btnNext}>NEXT</button>
                   </div> 
               
                <div>
                  <img src = {'/img/images (3).jpg'} alt="profileImg" />
                   <ProfileStatusWithHooks status={this.props.status}
                               updateStatus={this.props.updateStatus}/>
                </div>

            </div>
        
         )
  }
}
            
    export default ProfileInfo;