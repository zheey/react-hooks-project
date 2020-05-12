import user from './userReducer';
import userTest from './userTestReducer';
import test from './testReducer';
import {combineReducers} from "redux";

export default combineReducers({
    user,
    userTest,
    test
});