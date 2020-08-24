import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Dashboard from './index';
import NoteItem from './NoteItem';


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render AddNote component without notes', () => {
    const notes = []; 
    const wrapper = shallow(<Dashboard notes={notes}/>)

    expect(wrapper.find('.dashboard-list').length).toBe(1);
    expect(wrapper.find('.dashboard-noNotes').length).toBe(1);
    expect(wrapper.find(NoteItem).length).toBe(0);
});

test('Render AddNote component with notes', () => {
    const notes = [{title:'1'},{title:'2'}]
    const wrapper = shallow(<Dashboard notes={notes}/>)

    expect(wrapper.find('.dashboard-list').length).toBe(1);
    expect(wrapper.find('.dashboard-addNote').length).toBe(1);
    expect(wrapper.find(NoteItem).length).toBe(2);
});