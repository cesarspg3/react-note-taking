import * as actionTypes from './types';

//ROUTER
export const goTo = (route) => ({type: actionTypes.GO_TO, route});

//DASHBOARD
export const addNote = (note) => ({type: actionTypes.ADD_NOTE, note});
export const editNote = (note) => ({type: actionTypes.EDIT_NOTE, note});
