import React from 'react';
import Button from '@material-ui/core/Button';

import './logout.scss';

export default function Logout(props){
 
    const closeSesion = () => {
        localStorage.removeItem('saveMe');
        props.logout()
    }

	return (
        <div className='logoutBtn'>
            <Button className='userDetailBtn' variant="contained" onClick={() => { closeSesion() }}>Cerrar sesión</Button>
        </div>
	    );
	
}