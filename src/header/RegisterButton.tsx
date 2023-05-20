import React, { useContext, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

export const RegisterButton = () => {
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleClick = useCallback(() => {
    setSelectedNavIsHome(false);
  }, [setSelectedNavIsHome]);

  const navLink = (
    <NavLink id='register-link' className='get-hosted' to='/register' onClick={handleClick}>
        Register
      {/* <Button className='button' variant="contained">
      </Button> */}
    </NavLink>
  );

  return navLink;
};
