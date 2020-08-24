import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './index';


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render Header component whithout back buttom', () => {
    const wrapper = shallow(<Header route='dashboard'/>)
    expect(wrapper.find('.header-Container').length).toBe(1);
    expect(wrapper.find('.header-GoHome').length).toBe(0);
});

test('Render Header component whith back buttom', () => {
    const wrapper = shallow(<Header route='other route'/>)
    expect(wrapper.find('.header-Container').length).toBe(1);
    expect(wrapper.find('.header-GoHome').length).toBe(1)
});