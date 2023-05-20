import React from 'react';
import Housing from './Housing';

const data = [
  {
    id: 1,
    title: 'Chambre T2',
    location: "Résidence du Savoir, Toulouse",
    image: 'st-joseph.svg',
    description: "Ce logement étudiant de 20m² à proximité de l'Université, est à 10mns de la gare à pied.",
    rate: 3
  },
  {
    id: 2,
    title: 'Chambre T2',
    location: "Résidence de la Science, Montpelier",
    image: 'st-joseph.svg',
    description: "Ce logement étudiant de 20m² à proximité de l'Université, est à 10mns de la gare à pied.",
    rate: 3
  },
  {
    id: 3,
    title: 'Chambre T2',
    location: "Résidence de Mère Nature, Bayonne",
    image: 'st-joseph.svg',
    description: "Ce logement étudiant de 20m² à proximité de l'Université, est à 10mns de la gare à pied.",
    rate: 2
  },
  {
    id: 4,
    title: 'Chambre T2',
    location: "Résidence des Lettres, Lyon",
    image: 'st-joseph.svg',
    description: "Ce logement étudiant de 20m² à proximité de l'Université, est à 10mns de la gare à pied.",
    rate: 5
  },
];

const HousingItem: React.FC<HousingData> = React.memo(
  ({ id, title, location, image, description, rate }) => (
    <Housing
      title={title}
      location={location}
      image={image}
      description={description}
      rate={rate}
    />
  ),
  (prevProps, nextProps) =>
    prevProps.title === nextProps.title &&
    prevProps.location === nextProps.location &&
    prevProps.image === nextProps.image &&
    prevProps.description === nextProps.description &&
    prevProps.rate === nextProps.rate
);

interface HousingData {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  rate: number;
}

function Pricing() {
  return (
    <div id="housing-list-container">
      <h2> Logements Étudiants </h2>
      <div id="housing-list">
        {data.map((item) => (
          <HousingItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            image={item.image}
            description={item.description}
            rate={item.rate}
          />
          ))}
      </div>
    </div>
  )
}

export default Pricing