import {SET_AUTH_USER, GET_AUTH_USER} from "../types/actionTypes";

/**
 * Action to get the current user into redux
 * */
export function getCurrentUser(){
    return {
        type: GET_AUTH_USER
    }
}

/**
 * Action to set the current user into redux
 * */
export function setCurrentUser(user){
    localStorage.setItem('af_user',JSON.stringify(user));
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}