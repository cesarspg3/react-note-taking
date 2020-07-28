import * as actionTypes from '../actions/types';

const initialState = {
    loading: true,
    error: null,
    user: [],
};

const getUser = (state) => ({
    ...state,
    loading: true
});

const getUserSuccess = (state, { user }) => ({
    ...state,
    loading: false,
    error: '',
    user
});

const getUserError = (state, { error }) => ({
    ...state,
    loading: false,
    error
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GET_USER:
        return getUser(state);
    case actionTypes.GET_USER_SUCCESS:
        return getUserSuccess(state, action);
    case actionTypes.GET_USER_ERROR:
        return getUserError(state, action);

    default: return state;
    }
}