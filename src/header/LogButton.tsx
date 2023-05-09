import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const LogButton = () => {
    const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

    return (<NavLink id='login-btn' className='get-hosted' to='/login' onClick={() => setSelectedNavIsHome(false)}>
        <Button className='button' variant="outlined" sx={{marginLeft: 'auto'}}>
            Log In
        </Button>
    </NavLink>)
}