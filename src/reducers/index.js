import { combineReducers } from 'redux';
import dashboard from './dashboard';
import router from './router';

export default combineReducers({
    dashboard,
    router
});