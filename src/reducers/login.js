import * as actionTypes from '../actions/types';

const initialState = {
    token: null,
    loading: false,
    error: ''
};

const login = (state) => ({
    ...state,
    loading: true,
    error: null,
});

const loginSuccess = (state, { token }) => ({
    ...state,
    loading: false,
    error: null,
    token
});

const loginError = (state, { error }) => ({
    ...state,
    loading: false,
    error
});

const restoreLogin = (state, { token }) => ({
    ...state,
    token
});

const logout = () => {

    return {
        token: null,
        loading: false
    }

};

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LOGIN:
        return login(state);
    case actionTypes.LOGIN_SUCCESS:
        return loginSuccess(state, action); 
    case actionTypes.LOGIN_ERROR:
        return loginError(state, action);
    case actionTypes.LOGOUT:
        return logout(state, action);
    case actionTypes.RESTORE_LOGIN:
        return restoreLogin(state, action);
    default: return state;
    }
}