import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Login from './index';


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render Login component without token', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.loginContainer').length).toBe(0);

});

test('Render Login component whit token', () => {
    const wrapper = shallow(<Login token={null}/>);
    expect(wrapper.find('.loginContainer').length).toBe(1);

});
