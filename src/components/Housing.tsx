import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import RateGiver from './RateGiver';
import './Housing.css';

type HousingProps = {
  title: string,
  location: string,
  image: string,
  description: string,
  rate: number
};

const Housing: React.FC<HousingProps> = ({ title, location, image, description, rate }) => {
  return (
    <div className='housing-item'>
        <img
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="logement"
          style={{ overflow: 'hidden', width: "100%", objectFit: "cover", cursor: "pointer", maxWidth: '100%' }}
        />
        <h5> {title} </h5>
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "13px",
            color: "#979797",
          }}
        > 
          <PlaceIcon /> 
          {location} 
          <span style={{color: '#FFE033'}}> <RateGiver rate={rate} /> </span> 
        </section> 

        <p> { description } </p>

    </div>
  );
};

export default Housing;