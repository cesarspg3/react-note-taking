import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import Header from './../../containers/Header';
import './userDetail.scss';

export default function UserDetail(props){

    const { getUser, loading, user, goTo } = props;
    const id = props.location.state.id

    useEffect(() => {
        getUser(id)
        goTo('userDetail')
    }, [getUser, id, goTo])
    
	return (
            <div>
                <Header history={props.history}/>
                <div className='userDetailContainer'>
                    <div className='userDetailTitle'>Detalle del usuario</div>
                    {loading ? 
                        <div className='loader'><CircularProgress /></div>
                    : (
                        <div>
                            <Grid container className='userDetailList'>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Nombre:</span> {user.name}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Teléfono:</span> {user.phone}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Nombre de usuario:</span> {user.username}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Website:</span> {user.website}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>email:</span> {user.email}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Compañía:</span> {user.company.name}
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} className='userDetailData'>
                                    <span className='userDetailDesc'>Ciudad:</span> {user.address.city}
                                </Grid>
                            </Grid>
                            <div className="userDetailError"></div>
                        </div>    
                    )}
                </div>
            </div>

	    );
	
}