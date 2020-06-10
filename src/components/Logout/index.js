import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import './logout.css';

export default function Logout(props){
 
    const closeSesion = () => {
        localStorage.removeItem('saveMe');
        props.logout()
    }

    console.log(props)

	return (
        <div className='logoutBtn'>
            <Button className='userDetailBtn' variant="contained" onClick={() => { closeSesion() }}>Cerrar sesión</Button>
        </div>
	    );
	
}