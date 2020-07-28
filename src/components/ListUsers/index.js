import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './listUsers.scss';
import UserItem from './UserItem';
import Header from './../../containers/Header';

export default function ListUsers(props){

	const { loading, error, users, getUsers } = props;

	useEffect(() => {
       getUsers()
	}, [getUsers])

	const rednerData = [];

	if (users.length > 0) {
		users.forEach((user, index) => {
			rednerData.push(<UserItem user={user} key={index}/>)
		});
	}
	  
	return loading ? 
				<div className='loader'><CircularProgress /></div>
			: (
				<div>
					<Header history={props.history}/>
					<div className='list'>
						{rednerData}
						{error}
					</div>
				</div>
			);
	
}