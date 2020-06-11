import React from 'react';
import { Link } from 'react-router-dom';

import './userItem.scss';

export default function UserItem({user}){

    const {avatar:urlImg, email, first_name, id, last_name} = user
	  
	return (
        <Link className='userItemContainer' to={{pathname:'/userDetail',  state: {id}}}>
            <div><img className='userItemImg' src={urlImg} alt={first_name}/></div>
            <div>
                <div><span className='UserItemDesc'>Nombre:</span> {first_name}</div>
                <div><span className='UserItemDesc'>Apellido:</span>: {last_name}</div>
                <div><span className='UserItemDesc'>Email:</span>: {email}</div>
            </div>
        </Link>
	);
	
}