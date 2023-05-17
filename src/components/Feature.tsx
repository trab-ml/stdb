import React from 'react';
import BankCard from './BankCard';
import './BankCard.css';

const sortOfCards : {name: string, img: string, price: number, description: string}[] = [
  {
    name: 'Visa Premier',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa ...'
  },
  {
    name: 'Visa Evolution',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa ...'
  },
  {
    name: 'Visa Classic',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa ...'
  }
] 

function Feature() {
  return (
    <div id='creditcard-container'>
      <h1>Ouvrir un compte bancaire en ligne</h1>
      {
        sortOfCards.map((card: {name: string, img: string, price: number, description: string}, index) => (
          <BankCard name={card.name} img={card.img} price={card.price} description={card.description} />
        ))
      }
    </div>
  )
}

export default Feature
