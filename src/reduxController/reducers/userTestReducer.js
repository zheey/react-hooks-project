import {SET_USER_TEST, GET_USER_TEST, UPDATE_AUTH_USER} from "../types/actionTypes";

const defaultState = {
    fetching: false,
};

const userTest = (state = defaultState, action) => {
    switch (action.type) {

        case GET_USER_TEST:
            return {
                ...state,
                fetching: true
            };

        case SET_USER_TEST:

            return {
                ...state,
                isAuthenticated: true,
                fetching: false,
                userTest: action.payload
            };
        default:
            return state;
    }
};

export default userTest;