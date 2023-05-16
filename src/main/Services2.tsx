import React from 'react';

export default function Services2() {
  return (

  <div className='services2-grid-container'>
    <div className='grid-item'><img src={`${process.env.PUBLIC_URL}/imgs/young7.jpg`} alt='family' style={{maxWidth: '100%'}}/></div>
    <div className='grid-item'>
      <h2>La banque des clients</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.</p>      
    </div>
    <div className='grid-item'>
      <h2>La banque des clients</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.</p>      
    </div>
    <div className='grid-item'><img src={`${process.env.PUBLIC_URL}/imgs/young7.jpg`} alt='family' style={{maxWidth: '100%'}}/></div>
  </div>
  );
}