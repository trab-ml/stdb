import React, { useContext, useCallback } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const RegisterButton = () => {
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleClick = useCallback(() => {
    setSelectedNavIsHome(false);
  }, [setSelectedNavIsHome]);

  const navLink = (
    <NavLink id='register-btn' className='get-hosted' to='/register' onClick={handleClick}>
      <Button className='button' variant="contained">
        Register
      </Button>
    </NavLink>
  );

  return navLink;
};
