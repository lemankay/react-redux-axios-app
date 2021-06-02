
const SEND_MESSAGE = "SEND-MESSAGE";
type InitialStateType = {
    dialogs: Array<DiallogType>,
    messages: Array<MassagesType>,
}
type DiallogType = {id: number,name: string}
type MassagesType = {id: number,message: string}
let initialstate:InitialStateType = {
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
        {id: 2, message: 'you name leman?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    
}
const dialogReduser = (state=initialstate, action: any)=> {
    switch(action.type){
        case SEND_MESSAGE:
                let body = action.newMessageBody;
                return {
                    ...state,
                    messages: [...state.messages,{id: 7, message: body}],                          
                }
        default:
                return state;
    } 
}

export default dialogReduser;

export const sendMsssageCreater = (newMessageBody: any) =>({type: SEND_MESSAGE,newMessageBody})
 