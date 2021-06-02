 import {createStore, combineReducers,applyMiddleware} from 'redux';
 import  dialogReduser from './dialog-reduser';
 import  profileReduser from './profile-reduser';
 import  sidebarReduser from './sidebar-reduser';
 import usersReduser from './users-reduser';
 import friendsReduser from './friends-reduser';
 import authReduser from './auth-reduser';
 import thunkMiddleware from 'redux-thunk';
 import { reducer as formReducer } from 'redux-form';
let reducers = combineReducers({
        dialogPage: dialogReduser,
        profilePage: profileReduser,
        sidebar: sidebarReduser,
        usersPage: usersReduser,
        friendsPage: friendsReduser,
        auth: authReduser,
        form: formReducer
 });
 let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

 export default store;
 window.store = store;