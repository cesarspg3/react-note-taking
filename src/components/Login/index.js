import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import laLigaIcon from './../../images/laligaIcon.png'

import './Login.css';

export default function Login(props){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { loading, login, error, token, restoreLogin } = props;
	
	useEffect(() => {
		const storeageToken = localStorage.getItem('saveMe');
		if (storeageToken) restoreLogin(storeageToken)
	}, [restoreLogin])
	
	return token !== null ?
		<Redirect to='/listUsers' /> :
		(
		<div>
			<img src={laLigaIcon} alt='La Liga' className='iconLogin'/>
			<div className='loginContainer'>
				<TextField 
					className="inputLogin"
					label="Email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					/>
				
				<TextField
					type="password"
					className="inputLogin"
					onChange={(e) => setPassword(e.target.value)}
					label='Contraseña'
					value={password}
					/>
				
				<Button variant="contained" onClick={() => { login(email, password) }}>{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}</Button>
				<div className="loginError">{error}</div>
			</div>
		</div>
	);
	
}