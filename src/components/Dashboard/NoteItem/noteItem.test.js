import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NoteItem from './index';


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render NoteItem component with mock data', () => {
    const note = {
        title: 'title text',
        backgroundColor: 'red',
        text: 'this is a test'
    }; 

    const wrapper = shallow(<NoteItem note={note}/>)

    expect(wrapper.find('.noteItem-red').length).toBe(1);
    expect(wrapper.find('.noteItem-title').text()).toBe('title text');
    expect(wrapper.find('.noteItem-text').text()).toBe('this is a test');
});
