import * as actionTypes from './types';

//Login
export const login = () => ({ type: actionTypes.LOGIN });
export const loginSuccess = (token) => ({ type: actionTypes.LOGIN_SUCCESS, token });
export const loginError = (error) => ({ type: actionTypes.LOGIN_ERROR, error });
export const restoreLogin = (token) => ({ type: actionTypes.RESTORE_LOGIN, token });
export const logout = () => ({ type: actionTypes.LOGOUT });

//LIST USERS
export const getUsers = () => ({ type: actionTypes.GET_USERS });
export const getUsersSuccess = (users) => ({ type: actionTypes.GET_USERS_SUCCESS, users });
export const getUsersError = (error) => ({ type: actionTypes.GET_USERS_ERROR, error });
