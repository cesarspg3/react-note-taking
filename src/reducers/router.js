import * as actionTypes from '../actions/types';

const initialState = {
    route: 'listUsers',
};

const goBack = (state, {route}) => ({
    ...state,
    route
});


export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GO_TO:
        return goBack(state, action);

    default: return state;
    }
}