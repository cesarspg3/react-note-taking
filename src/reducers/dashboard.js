import * as actionTypes from '../actions/types';

const initialState = {
    notes: [],
};

let idNote = 0 

const addNote = (state, { note }) => {

    const notes = state.notes;
    note.id = idNote;
    idNote++;
    notes.push(note);
    
    return {
        ...state,
        notes
    }
};

const editNote = (state, { note }) => {

    const notes = state.notes;
    notes.filter((filterNote, index) => {
        if (filterNote.id === note.id) {
            notes[index] = note;
        }
        return true;
    })
    
    return {
        ...state,
        notes
    }
};


export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.ADD_NOTE:
        return addNote(state, action);
    case actionTypes.EDIT_NOTE:
        return editNote(state, action);

    default: return state;
    }
}