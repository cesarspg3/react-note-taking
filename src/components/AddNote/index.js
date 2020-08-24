import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './addNote.scss';
import Header from './../../containers/Header';

export default function AddNote(props){

    const { goTo, addNote, history } = props;
    
    useEffect(() => {
        goTo('addNote');
    }, [goTo])
    const addNoteBtn = () => {
        const note = {
            title,
            backgroundColor,
            text
        }
        addNote(note)
        history.push('/dashboard')
        goTo('dashboard');
    }

    const [title, setTitle] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('yellow');
    const [text, setText] = useState('');
	  
	return (
		<div>
			<Header history={props.history}/>
			<div className='addNote-container'>

				<div className='addNote-title'>Add a new note</div>

                <div className='addNote-chooseColorTxt'>Choose the background color of the note:</div>
                <div className='addNote-chooseColorContainer'>
                    <div className={backgroundColor === 'yellow' ? 'addNote-colorBoxSelected addNote-yellow addNote-colorBox' : 'addNote-colorBox addNote-yellow'} onClick={() => setBackgroundColor('yellow')}></div>
                    <div className={backgroundColor === 'green' ? 'addNote-colorBoxSelected addNote-green addNote-colorBox' : 'addNote-colorBox addNote-green'} onClick={() => setBackgroundColor('green')}></div>
                    <div className={backgroundColor === 'red' ? 'addNote-colorBoxSelected addNote-red addNote-colorBox' : 'addNote-colorBox addNote-red'} onClick={() => setBackgroundColor('red')}></div>
                    <div className={backgroundColor === 'pink' ? 'addNote-colorBoxSelected addNote-pink addNote-colorBox' : 'addNote-colorBox addNote-pink'} onClick={() => setBackgroundColor('pink')}></div>
                    <div className={backgroundColor === 'blue' ? 'addNote-colorBoxSelected addNote-blue addNote-colorBox' : 'addNote-colorBox addNote-blue'} onClick={() => setBackgroundColor('blue')}></div>
                </div>

                <TextField
                        className='addNote-input'
                        label="Title of the note"
                        multiline
                        value={title}
                          onChange={(e) => {setTitle(e.target.value)}}
                        />

                <TextField
                        className='addNote-input'
                        label="Text of the note"
                        multiline
                        value={text}
                          onChange={(e) => {setText(e.target.value)}}
                        />
                <div className='addNote-sendBtnContainer'>
                    <Button className='addNote-sendBtn' variant="contained" onClick={() => { addNoteBtn() }}>Add note</Button>
                </div>

			</div>
		</div>
	)
			
}