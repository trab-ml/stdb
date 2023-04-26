import React from 'react';
import Button from '@mui/material/Button';

function Signup() {
  return (
    <div className='signup' style={{ color: 'black' }}>
      <p>Join us anytime you want, you're welcome !</p>
      <div>
        <Button variant='contained' sx={{ mr: 1 }}>Join Today</Button>
        <Button variant='outlined'>Contact Us</Button>
      </div>
    </div>
  );
}

export default Signup; 