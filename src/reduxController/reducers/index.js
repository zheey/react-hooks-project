import {combineReducers} from 'redux'
import user from './userReducer';

const combinedReducer = () => {
    combineReducers({user})
}

export default combinedReducer