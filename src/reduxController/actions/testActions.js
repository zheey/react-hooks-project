import {SET_TEST, GET_TEST} from "../types/actionTypes";

/**
 * Action to get the current user into redux
 * */
export function getTests(){
    return {
        type: GET_TEST
    }
}

/**
 * Action to set the current user into redux
 * */
export function setTests(tests){
    return {
        type: SET_TEST,
        payload: tests
    }
}