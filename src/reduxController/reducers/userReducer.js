import {SET_AUTH_USER, GET_AUTH_USER, UPDATE_AUTH_USER} from "../types/actionTypes";

const defaultState = {
    fetching: true,
    updating: false,
    isAuthenticated: false,
};

const user = (state = defaultState, action) => {
    switch (action.type) {

        case GET_AUTH_USER:
            return {
                ...state,
                fetching: true
            };

        case SET_AUTH_USER:

            return {
                ...state,
                isAuthenticated: true,
                fetching: false,
                user: action.payload
            };

        case UPDATE_AUTH_USER:
            return {
                ...state,
                updating: true
            };
        default:
            return state;
    }
};

export default user;