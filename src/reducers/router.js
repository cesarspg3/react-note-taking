import * as actionTypes from '../actions/types';

const initialState = {
    route: 'dashboard',
};

const goTo = (state, {route}) => ({
    ...state,
    route
});


export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GO_TO:
        return goTo(state, action);

    default: return state;
    }
}