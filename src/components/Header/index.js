import React from 'react';
import Grid from '@material-ui/core/Grid';

import './header.scss';

export default function Header(props){

        const { goTo, history, route } = props;
        const goHome = () => {
                history.push('/listUsers')
                goTo('listUsers');
        }

	return (
        <Grid container className='headerContainer'>
            <Grid item xs={11}>
            	Prueba Nivel Front Inveert
            </Grid>
            {route === 'userDetail' ? 
                <Grid item xs={1} onClick={goHome} className='headerGoHome'>
                    Volver
                </Grid>
			:
			<Grid item xs={1}></Grid>
            }
        </Grid>
	    );
	
}