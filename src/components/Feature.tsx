import React from 'react';
import BankCard from './BankCard';
import './bankcard.css';

const sortOfCards : {name: string, img: string, price: number, description: string}[] = [
  {
    name: 'Visa Premier',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed adipisci natus, est nemo nesciunt quisquam commodi sequi facere earum illo tempora accusantium animi temporibus velit et eum voluptate enim quam!'
  },
  {
    name: 'Visa Evolution',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed adipisci natus, est nemo nesciunt quisquam commodi sequi facere earum illo tempora accusantium animi temporibus velit et eum voluptate enim quam!'
  },
  {
    name: 'Visa Classic',
    img: 'testingCard.jpeg',
    price: 0,
    description: 'La carte visa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed adipisci natus, est nemo nesciunt quisquam commodi sequi facere earum illo tempora accusantium animi temporibus velit et eum voluptate enim quam!'
  }
] 

function Feature() {
  return (
    <div id='creditcard-container'>
      <h1>Ouvrir un compte bancaire en ligne</h1>
      <div>
      {
        sortOfCards.map((card: {name: string, img: string, price: number, description: string}, index) => (
          <BankCard name={card.name} img={card.img} price={card.price} description={card.description} key={index} />
        ))
      }
      </div>
  </div>
  )
}

export default Feature