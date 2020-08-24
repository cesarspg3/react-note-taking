import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddNote from './index';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render AddNote component', () => {
    const wrapper = shallow(<AddNote/>)
    expect(wrapper.find('.addNote-container').length).toBe(1);
    expect(wrapper.find('.addNote-chooseColorContainer').length).toBe(1);
    expect(wrapper.find(TextField).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(1);
});

test('AddNote component, default selected colur', () => {
    const wrapper = shallow(<AddNote/>)
    expect(wrapper.find('.addNote-yellow').props().className).toBe('addNote-colorBoxSelected addNote-yellow addNote-colorBox');
    expect(wrapper.find('.addNote-green').props().className).toBe('addNote-colorBox addNote-green');
});

test('AddNote component, select green colour', () => {
    const wrapper = shallow(<AddNote/>)
    wrapper.find('.addNote-green').simulate('click');
    expect(wrapper.find('.addNote-green').props().className).toBe('addNote-colorBoxSelected addNote-green addNote-colorBox');
    expect(wrapper.find('.addNote-yellow').props().className).toBe('addNote-colorBox addNote-yellow');
});