import * as actionTypes from './types';

//LIST USERS
export const getUsers = () => ({ type: actionTypes.GET_USERS });
export const getUsersSuccess = (users) => ({ type: actionTypes.GET_USERS_SUCCESS, users });
export const getUsersError = (error) => ({ type: actionTypes.GET_USERS_ERROR, error });

//USER DETAIL
export const getUser = () => ({ type: actionTypes.GET_USER });
export const getUserSuccess = (user) => ({ type: actionTypes.GET_USER_SUCCESS, user });
export const getUserError = (error) => ({ type: actionTypes.GET_USER_ERROR, error });

//ROUTER
export const goTo = (route) => ({type: actionTypes.GO_TO, route});