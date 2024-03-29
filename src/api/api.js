import *as axios from 'axios';

const instance = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
             "API_KEY":"b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
        }       
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => {
            return response.data;});
    },
    follow(userId) {
        return instance.get(`${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`${userId}`)
    },
    getProfile(userId) {
        console.warn('obsolete method. please profileAPI dbject')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId) { 
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status) { 
        return instance.put(`profile/status/`+ {status: status});
    }
}
export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
            return response.data;});
}
export const authAPI = {
    me() {
       return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false,captcha) {
        return instance.post(`auth/me`, {email, password, rememberMe,captcha});
     },
    logout() {
        return instance.delete(`auth/me`);
     },
}
export const securityAPI = {
    getCaptchaUrl(){
        return instance.delete(`auth/me`);
    }
}