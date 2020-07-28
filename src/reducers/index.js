import { combineReducers } from 'redux';
import listUsers from './listUsers';
import userDetail from './userDetail';
import router from './router';

export default combineReducers({
    listUsers,
    userDetail,
    router
});