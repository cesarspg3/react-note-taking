import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './userDetail.css';

export default function UserDetail(props){

    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [id, setId] = useState('');

    const { users, token, updateUser, deleteUser } = props;

    useEffect(() => {
        if ( token || props.location.state.id ) {
            const user = users.filter(user => user.id === props.location.state.id)[0];
            if (user) {
                const { avatar, email, first_name, last_name, id } = user
                setAvatar(avatar);
                setEmail(email);
                setName(first_name);
                setSurname(last_name);
                setId(id);
            }
        }
	}, [])
	  
	return token === null || !props.location.state.id ?
		<Redirect to='/login' /> :
		(
			<div className='userDetailContainer'>
                <div className='userDetailTitle'>Detalle usuario</div>
                <div className='userDetailInputsContainer'>
                    <TextField
                        className='userDetailInput'
                        label="avatar"
                        multiline
                        value={avatar}
                          onChange={(e) => {setAvatar(e.target.value)}}
                        />
                    <TextField
                        className='userDetailInput'
                        label="Email"
                        multiline
                        value={email}
                         onChange={(e) => {setEmail(e.target.value)}}
                        />
                    <TextField
                        className='userDetailInput'
                        label="Nombre"
                        multiline
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                        />
                    <TextField
                        className='userDetailInput'
                        label="Apellido"
                        multiline
                        value={surname}
                        onChange={(e) => {setSurname(e.target.value)}}
                        />
                    <Button className='userDetailBtn' variant="contained" onClick={() => { deleteUser(id, () => {props.history.push('/listUsers')}) }}>Borrar</Button>
                    <Button className='userDetailBtn' variant="contained" onClick={() => { updateUser(id, () => {props.history.push('/listUsers')}) }}>Editar</Button>

				<div className="userDetailError"></div>
                </div>

            </div>
	    );
	
}