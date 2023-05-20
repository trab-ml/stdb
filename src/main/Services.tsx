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

const ServiceItem: React.FC<Service> = React.memo(
  ({ title, description }) => (
    <div className="grid-item">
      <h3 className='services-box-main-title'>{title}</h3>
      <p>{description}</p>
      <Button variant="outlined" className='services-btn'>
        <a href='# '>Learn More</a>
      </Button>
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description
);

export default function Services(): JSX.Element {
  return (
    <div className="services-grid-container">
      <h1 className='grid-item'><span>Studentbank, Always looking after your satisfaction!</span></h1>
      {services.map((service: Service, index: number) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}