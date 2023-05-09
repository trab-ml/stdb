import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const RegisterButton = () => {
    const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext); 

    return (<NavLink className='get-hosted' to='/register' onClick={() => setSelectedNavIsHome(false)}>
        <Button className='button' variant="contained" sx={{marginLeft: '10px', background: '#18A0FB'}}>
        Register
        </Button>
    </NavLink>)
}