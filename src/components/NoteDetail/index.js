import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './noteDetail.scss';
import Header from './../../containers/Header';

export default function NoteDetail(props){

    const { goTo, editNote, history } = props;
    
    const [title, setTitle] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('yellow');
    const [text, setText] = useState('');
    const [id, setId] = useState('');
    
    const noteDetailBtn = () => {
        const note = {
            title,
            backgroundColor,
            text,
            id
        }
        editNote(note)
        history.push('/dashboard')
        goTo('dashboard');
    }

    useEffect(() => {
        goTo('noteDetail');
        const { title, backgroundColor, text, id } = props.location.state.note;
        setTitle(title);
        setBackgroundColor(backgroundColor);
        setText(text);
        setId(id);
    }, [props.location.state.note, goTo])
    
	return (
		<div>
			<Header history={props.history}/>
			<div className='noteDetail-container'>

				<div className='noteDetail-title'>Edit note</div>

                <div className='noteDetail-chooseColorTxt'>Choose the background color of the note:</div>
                <div className='noteDetail-chooseColorContainer'>
                    <div className={backgroundColor === 'yellow' ? 'noteDetail-colorBoxSelected noteDetail-yellow noteDetail-colorBox' : 'noteDetail-colorBox noteDetail-yellow'} onClick={() => setBackgroundColor('yellow')}></div>
                    <div className={backgroundColor === 'green' ? 'noteDetail-colorBoxSelected noteDetail-green noteDetail-colorBox' : 'noteDetail-colorBox noteDetail-green'} onClick={() => setBackgroundColor('green')}></div>
                    <div className={backgroundColor === 'red' ? 'noteDetail-colorBoxSelected noteDetail-red noteDetail-colorBox' : 'noteDetail-colorBox noteDetail-red'} onClick={() => setBackgroundColor('red')}></div>
                    <div className={backgroundColor === 'pink' ? 'noteDetail-colorBoxSelected noteDetail-pink noteDetail-colorBox' : 'noteDetail-colorBox noteDetail-pink'} onClick={() => setBackgroundColor('pink')}></div>
                    <div className={backgroundColor === 'blue' ? 'noteDetail-colorBoxSelected noteDetail-blue noteDetail-colorBox' : 'noteDetail-colorBox noteDetail-blue'} onClick={() => setBackgroundColor('blue')}></div>
                </div>

                <TextField
                        className='noteDetail-input'
                        label="Title of the note"
                        multiline
                        value={title}
                          onChange={(e) => {setTitle(e.target.value)}}
                        />

                <TextField
                        className='noteDetail-input'
                        label="Text of the note"
                        multiline
                        value={text}
                          onChange={(e) => {setText(e.target.value)}}
                        />
                <div className='noteDetail-sendBtnContainer'>
                    <Button className='noteDetail-sendBtn' variant="contained" onClick={() => { noteDetailBtn() }}>Edit note</Button>
                </div>

			</div>
		</div>
	)
			
}