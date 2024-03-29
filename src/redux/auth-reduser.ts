import { authAPI, securityAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"; 
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"; 
export type InitialState = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
};

let initialstate:InitialState = {
     userId: null,
     email: null,
     login: null,
     isAuth: false,
     captchaUrl:null
};
let authReduser = (state=initialstate, action:any) => {
    switch(action.type){  
        case SET_USER_DATA:
            case GET_CAPTCHA_URL_SUCCESS:
              return {  ...state,
                        ...action.payload
              }                     
            default:
                return state;
    }
}
type SetAuthUserDataPayload = {
     userId:number|null, email:string|null, login:string|null, isAuth:boolean}
type SetAuthUserData = {type: typeof SET_USER_DATA,
     payload: SetAuthUserDataPayload}
export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserData =>(
    {type:  SET_USER_DATA,
     payload: {userId, email, login, isAuth} });
type GetCaptchaUrlSuccessAT = {type:typeof GET_CAPTCHA_URL_SUCCESS,payload:{captchaUrl:string}}
export const getCaptchaUrlSuccess = (captchaUrl:any):GetCaptchaUrlSuccessAT =>({
    type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}
})
export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authAPI.me();
     
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data;
            dispatch.setAuthUserData(id, email, login, true);
        }
    
}
export const login = (email:string, password:string, rememberMe:boolean,captcha:string) => async (dispatch: any) => {         
    let response = await authAPI.login(email, password, rememberMe, captcha);
    
        if(response.data.resultCode === 0){
            dispatch.getAuthUserData();
        }else {  
            if(response.data.resultCode === 10){dispatch(getCaptchaUrl())}
            let message =response.data.messages.length>0 ? response.data.messages[0]:"Some error";      
           dispatch(stopSubmit("login", {_error: message}));
        }  
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const logout = () => async (dispatch: any) => {
    let response = authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch.setAuthUserData(null, null, null, false);
        }
}


export default authReduser;

