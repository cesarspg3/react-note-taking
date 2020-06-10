import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Redirect } from 'react-router-dom';
import UserItem from './UserItem';
import ListUsers from './index';


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Render Login component whitout token, go to login', () => {
    const wrapper = shallow(<ListUsers users={[]} token={null}/>);
    expect(wrapper.find(Redirect).length).toBe(1);

});

test('Render ListUsers component without users, show the loader', () => {
    const wrapper = shallow(<ListUsers users={[]} token='test' loading={true}/>);
    expect(wrapper.find('.loader').length).toBe(1);
});

const users = [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
    }
  ];

test('Render ListUsers component with three users, show the loader', () => {
    const wrapper = shallow(<ListUsers users={users} token='test'/>);
    expect(wrapper.find(UserItem).length).toBe(3);
});


