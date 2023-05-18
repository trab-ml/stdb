import React from 'react';
import RateGiver from './RateGiver';
import PlaceIcon from '@mui/icons-material/Place';
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
    <div className="housing-container">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="logement"
          className="housing-image"
        />
      </div>

      <h2 className="title">
        {title}
      </h2>

      <div className="details-container">
        <div className="location">
          <PlaceIcon className="place-icon" />
          <p className="location-text">
            {location}
          </p>
        </div>
        <RateGiver rate={rate} />
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Housing;
