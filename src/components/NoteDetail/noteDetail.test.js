import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NoteDetail from './index';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const location = {
    state: {
        note: {
            title: 'example title',
            backgroundColor: 'red',
            text: 'text of the note'
        }
    }
}

const goTo = () => {
    return true;
}

test('Render NoteDetail component with data', () => {
    const wrapper = shallow(<NoteDetail location={location} goTo={goTo}/>)
    expect(wrapper.find('.noteDetail-container').length).toBe(1);
    expect(wrapper.find('.noteDetail-chooseColorContainer').length).toBe(1);
    expect(wrapper.find(TextField).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(1);
});

test('NoteDetail component, default selected colur', () => {
    const wrapper = shallow(<NoteDetail location={location}/>)
    expect(wrapper.find('.noteDetail-yellow').props().className).toBe('noteDetail-colorBoxSelected noteDetail-yellow noteDetail-colorBox');
    expect(wrapper.find('.noteDetail-green').props().className).toBe('noteDetail-colorBox noteDetail-green');
});

test('NoteDetail component, select green colour', () => {
    const wrapper = shallow(<NoteDetail location={location}/>)
    wrapper.find('.noteDetail-green').simulate('click');
    expect(wrapper.find('.noteDetail-green').props().className).toBe('noteDetail-colorBoxSelected noteDetail-green noteDetail-colorBox');
    expect(wrapper.find('.noteDetail-yellow').props().className).toBe('noteDetail-colorBox noteDetail-yellow');
});