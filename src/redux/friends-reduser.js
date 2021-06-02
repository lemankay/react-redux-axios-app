const FOLLOW = "FOLLOW"; 
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialstate = {
    users: [
        {id: 1,followed: false, photos:"", fulname:"leman",status:"I am a boss"
           ,location:{city:"Boston",country:"USA"}},
        {id: 2,followed: true,photos:"", fulname:"leman",status:"I am a boss too"
           ,location:{city:"Boston",country:"USA"}},
        {id: 3,followed: false,photos:"", fulname:"leman",status:"I am a boss too"
           ,location:{city:"Boston",country:"USA"}},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How'},
        {id: 5, message: 'You are welcome'}
    ],
    newMessageBody: ""
}
let friendsReduser = (state=initialstate, action) => {
    switch(action.type){
        
        case FOLLOW:
              return {
                  ...state,
                 // users: [...state.users]
                 users: state.users.map(u => {
                return u.id === action.userId ?  {...u, followed: true}: u
                    })
              } 
                   
        case UNFOLLOW:
                return {
                    ...state,
                   // users: [...state.users]
                   users: state.users.map(u => {
                  return u.id === action.userId ?
                   {...u, followed: false}: u
                      })
                }
         case SET_USERS:
                      return {
                          ...state,
                          users: [...state.users, ...action.users]
                      }
         case SEND_MESSAGE:
                        let body = state.newMessageBody;
                        return {
                            ...state,
                            newMessageBody: '', 
                            messages: [...state.messages,
                                {id: 7, message: body}
                                ]                     
                        }
        
         case UPDATE_NEW_MESSAGE_BODY:
                    return {
                        ...state,
                        newMessageBody: action.body
                    } 
            
            default:
                return state;
    }
}




export const followAC = (userId) =>({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({type: SET_USERS, users})
export const sendMsssageCreater = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
({type:UPDATE_NEW_MESSAGE_BODY, body: text})  

export default friendsReduser;

