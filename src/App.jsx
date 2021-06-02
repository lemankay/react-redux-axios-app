import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter} from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { IvanovRefactor } from './components/Snake/IvanovRefactor';
import LoginComponent from './components/Login/LoginComponent';
import { initializeApp } from './redux/app-reduser';
import SnakeContainer from './components/Snake/SnakeContainer';
class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp();
      }
      render(){
           return (
            <div className='app-wrapper'> 
                 <HeaderContainer/>  
                 <Navbar />     
              <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogContainer  />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <LoginComponent/>}/>
                    <Route path='/friends' render={() => <FriendsContainer />}/>        
                    <Route path='/snake' render={() => <IvanovRefactor />}/>             
                    
                </div> 
                    
            </div>   
    )
 } 
}
export default compose(withRouter,
                      connect(null,{initializeApp}))(App); 