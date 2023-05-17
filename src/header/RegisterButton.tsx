import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const RegisterButton = () => {
    const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext); 

    return (<NavLink id='register-btn' className='get-hosted' to='/register' onClick={() => setSelectedNavIsHome(false)}>
        <Button className='button' variant="contained">
            Register
        </Button>
    </NavLink>)
}