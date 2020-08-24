import React from 'react';
import Grid from '@material-ui/core/Grid';

import './header.scss';

export default function Header(props){

        const { goTo, history, route } = props;
        const goDashboard = () => {
                history.push('/dashboard')
                goTo('dashboard');
        }

	return (
        <Grid container className='header-Container'>
            <Grid item xs={11}>
                Note taking code test
            </Grid>
            {route !== 'dashboard' ? 
                <Grid item xs={1} onClick={goDashboard} className='header-GoHome'>
                    Back
                </Grid>
			:
			<Grid item xs={1}></Grid>
            }
        </Grid>
	    );
	
}