
import {getAuthUserData} from './auth-reduser';

const INITIALIZET_SUCCESS = "INITIALIZET_SUCCESS"; 
export type InitialstateType = {
    initializet: boolean,
    globalError: null | string
};

let initialstate:InitialstateType = {
     initializet: false,
     globalError: null
};
let appReduser = (state:InitialstateType=initialstate, action:any):InitialstateType => {
    switch(action.type){ 
        case INITIALIZET_SUCCESS:
              return {
                  ...state,
                  initializet: true
              }                    
            default:
                return state;
    }                                
}
type InitializetSuccessActionType =
    {type: typeof INITIALIZET_SUCCESS };
export const initializetSuccess = ():InitializetSuccessActionType =>(
    {type:  INITIALIZET_SUCCESS });

export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(()=>{
      dispatch(initializetSuccess());
  });
    
}
export default appReduser;

