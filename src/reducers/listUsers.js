import * as actionTypes from '../actions/types';

const initialState = {
    loading: true,
    error: null,
    users: [],
};

const getUsers = (state) => ({
    ...state,
    loading: true
});

const getUsersSuccess = (state, { users }) => ({
    ...state,
    loading: false,
    error: '',
    users
});

const getUsersError = (state, { error }) => ({
    ...state,
    loading: false,
    error
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GET_USERS:
        return getUsers(state);
    case actionTypes.GET_USERS_SUCCESS:
        return getUsersSuccess(state, action);
    case actionTypes.GET_USERS_ERROR:
        return getUsersError(state, action);

    default: return state;
    }
}