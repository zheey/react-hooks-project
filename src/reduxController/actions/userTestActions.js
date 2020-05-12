import {SET_USER_TEST, GET_USER_TEST} from "../types/actionTypes";

/**
 * Action to get the current user into redux
 * */
export function getUserTest(){
    return {
        type: GET_USER_TEST
    }
}

/**
 * Action to set the current user into redux
 * */
export function setUserTest(userTest){
    return {
        type: SET_USER_TEST,
        payload: userTest
    }
}