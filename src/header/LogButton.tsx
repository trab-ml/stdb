import React, { useContext, useCallback } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const LogButton = () => {
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleClick = useCallback(() => {
    setSelectedNavIsHome(false);
  }, [setSelectedNavIsHome]);

  const navLink = (
    <NavLink id='login-btn' className='get-hosted' to='/login' onClick={handleClick}>
      <Button className='button' variant="outlined" >
        Log In
      </Button>
    </NavLink>
  );

  return navLink;
};
