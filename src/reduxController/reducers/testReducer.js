import {SET_TEST, GET_TEST} from "../types/actionTypes";

const defaultState = {
    fetching: true,
};

const test = (state = defaultState, action) => {
    switch (action.type) {

        case GET_TEST:
            return {
                ...state,
                fetching: true
            };

        case SET_TEST:

            return {
                ...state,
                isAuthenticated: true,
                fetching: false,
                test: action.payload
            };
        default:
            return state;
    }
};

export default test;