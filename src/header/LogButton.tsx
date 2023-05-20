import React, { useContext, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const LogButton = () => {
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleClick = useCallback(() => {
    setSelectedNavIsHome(false);
  }, [setSelectedNavIsHome]);

  const navLink = (
    <NavLink id='login-link' className='get-hosted' to='/login' onClick={handleClick}>
        Log In
      {/* <Button className='button' variant="outlined" >
      </Button> */}
    </NavLink>
  );

  return navLink;
};
