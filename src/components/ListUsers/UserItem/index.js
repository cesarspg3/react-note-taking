import React from 'react';
import { Link } from 'react-router-dom';

import './userItem.scss';
import urlImg from './../../../images/user_no_photo.png';

export default function UserItem({user}){

    const {email, name,phone, id} = user
	  
	return (
        <Link className='userItemContainer' to={{pathname:'/userDetail',  state: {id}}}>
            <div><img className='userItemImg' src={urlImg} alt={name}/></div>
            <div>
                <div><span className='UserItemDesc'>Nombre:</span> {name}</div>
                <div><span className='UserItemDesc'>Teléfono:</span>: {phone}</div>
                <div><span className='UserItemDesc'>Email:</span>: {email}</div>
            </div>
        </Link>
	);
	
}