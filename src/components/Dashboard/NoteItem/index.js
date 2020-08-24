import React from 'react';
import { Link } from 'react-router-dom';

import './noteItem.scss';
// import urlImg from './../../../images/user_no_photo.png';

export default function UserItem({note}){

    const { title, backgroundColor, text } = note;
    let classColor = '';

    switch (backgroundColor) {
        case 'yellow':
            classColor = 'noteItem-yellow';
            break;
        case 'green':
            classColor = 'noteItem-green';
            break;
        case 'red':
            classColor = 'noteItem-red';
            break;
        case 'pink':
            classColor = 'noteItem-pink';
            break;
        case 'blue':
            classColor = 'noteItem-blue';
            break;

        default: classColor = 'noteItem-yellow';;
    }

	return (
        <Link className={`noteItem-Container ${classColor}`} to={{pathname:'/noteDetail',  state: {note}}}>
            <div className='noteItem-title'>{title}</div>
            <div className='noteItem-text'>{text}</div>
        </Link>
	);
	
}