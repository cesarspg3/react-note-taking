import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './userItem.css';

export default function UserItem({user}){

    const {avatar:urlImg, email, first_name, id, last_name} = user
	  
	return (
        <Link className='userItemContainer' to={{pathname:'/userDetail',  state: {id}}}>
            <div><img className='userItemImg' src={urlImg} /></div>
            <div>
                <div><span className='UserItemDesc'>Nombre:</span> {first_name}</div>
                <div><span className='UserItemDesc'>Apellido:</span>: {last_name}</div>
                <div><span className='UserItemDesc'>Email:</span>: {email}</div>
            </div>
        </Link>
	);
	
}