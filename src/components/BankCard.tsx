import React from 'react';

function BankCard(props: { name: string; img: string; price: number; description: string; }) {
    const {name, img, price, description} = props;
    
    return (
        <div className='bankcard'>
            <h3> {name} </h3>
            <img src={`${process.env.PUBLIC_URL}/${img}`} alt={`carte ${name}`} />
            <h5> {price} € <small>/ mois</small> </h5>
            <p> {description} </p>
        </div>
    );
}

export default BankCard