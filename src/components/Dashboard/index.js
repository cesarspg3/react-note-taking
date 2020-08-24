import React, { useEffect } from 'react';

import './dashboard.scss';
import NoteItem from './NoteItem';
import Header from './../../containers/Header';

export default function Dashboard(props){

	const { notes, history } = props;

	useEffect(() => {
       
	}, [])

	const goAddNote = () => {
		history.push('/addNote')
	}
	const rednerData = [];

	if (notes.length > 0) {
		notes.forEach((note, index) => {
			rednerData.push(<NoteItem note={note} key={index}/>)
		});
		rednerData.push(<div className='dashboard-addNote' onClick={goAddNote} key='add'>Add a new one clicking here</div>)
	} else {
		rednerData.push(<div className='dashboard-noNotes' onClick={goAddNote} key='addFirst'>No notes, add a new one clicking here</div>)
	}
	  
	return (
		<div>
			<Header history={props.history}/>
			<div className='dashboard-list'>
				{rednerData}
			</div>
		</div>
	)
			
}