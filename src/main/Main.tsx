import React from 'react';
import MuiImageList from './MuiImageList';
import Services from './Services';
import Services2 from './Services2';
import Services3 from './Services3';
import Signup from './Signup';
import './main.css'

const Main = () => {
  return (
    <main>
      <MuiImageList />
      <Services />
      <Services2 />
      <Services3 />
      <Signup />
    </main> 
  );
};

export default Main;