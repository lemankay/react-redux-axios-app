import dialogReduser from './dialog-reduser';
import profileReduser from './profile-reduser';
import sidebarReduser from './sidebar-reduser';
 
 const ADD_POST = "ADD-POST"; 
 const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
 const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
 const SEND_MESSAGE = "SEND-MESSAGE";


 let store={
    _state: {      
     
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
            title:'Messages',
            title2:'Dialogs',
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'}      
            ],
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Dimych'},
                    {id: 2, name: 'Andrew'},
                    {id: 3, name: 'Sveta'},
                    {id: 4, name: 'Sasha'},
                    {id: 5, name: 'Viktor'},
                    {id: 6, name: 'Valera'}
                ],
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'How is your it-kamasutra?'},
                    {id: 3, message: 'Yo'},
                    {id: 4, message: 'Yo'},
                    {id: 5, message: 'Yo'}
                ],
                newMessageBody: ""
            },
      
            sidebar: {}      
    },
      _callSubscriber(){
                console.log("henge");
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

      _addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type ===  UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody=action.body;
            this._callSubscriber(this._state);
        }else if(action.type ===  SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ' ';
            this._state.dialogsPage.messages.push({id: 6, message: body});          
            this._callSubscriber(this._state);
        }

    },
    dispatch(action){
       this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
       this._state.profilePage = profileReduser(this._state.profilePage, action);
       this._state.sidebar = sidebarReduser( this._state.sidebar, action);
       this._callSubscriber(this._state);
    }
    
}

  
   
    export default store;
     window.store=store;
  






