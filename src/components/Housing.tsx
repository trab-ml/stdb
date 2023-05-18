import React from 'react';

type housingType = {
    title: string,
    location; string,
    image: string,
    description: string
}

const Housing : React.FC<housingType> = ({title, location, image, description} : (housingType)) => {
  return (
    <div>Housing</div>
  )
}

export default Housing