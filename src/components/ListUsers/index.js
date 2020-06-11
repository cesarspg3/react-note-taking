import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import './listUsers.css';
import UserItem from './UserItem';
import Logout from './../../containers/Logout';

export default function ListUsers(props){

	const { loading, error, users, token, getUsers } = props;

	useEffect(() => {
        if (token) getUsers()
	}, [token, getUsers])

	const rednerData = [];

	if (users.length > 0) {
		users.forEach((user, index) => {
			rednerData.push(<UserItem user={user} key={index}/>)
		});
	}
	  
	return token === null ?
		<Redirect to='/login' /> :
		(
			loading ? 
				<div className='loader'><CircularProgress /></div>
			: (
				<div className='list'>
					{rednerData}
					{error}
					<Logout />
				</div>
			)

	);
	
}