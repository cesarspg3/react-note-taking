import { combineReducers } from 'redux';
import login from './login';
import listUsers from './listUsers';

export default combineReducers({
    login,
    listUsers
});