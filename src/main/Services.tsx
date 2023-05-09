import React from 'react';
import { Button } from '@mui/material';

type Service = {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "open an account",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.",
  },
  {
    title: "choose the right card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.",
  },
  {
    title: "check your balance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.",
  },
  {
    title: "send money",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et dolorem maxime nam quidem tempora cupiditate obcaecati, iste accusamus consequatur sed officiis adipisci nesciunt assumenda! Ullam possimus asperiores sequi dolor.",
  },
];

export default function Services(): JSX.Element {
  return (
    <div className="services-grid-container">
      <h1 className='grid-item'><span>Studentbank, Always looking after your satisfaction !</span></h1>
      {services.map((service: Service, index: number) => (
        <div className="grid-item" key={index}>
          <h3 className='services-box-main-title'>{service.title}</h3>
          <p>{service.description}</p>
          <Button variant="outlined" className='services-btn'>
            <a href='# '>Learn More</a>
          </Button>
        </div>
      ))}
    </div>
  );
}