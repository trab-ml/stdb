import React from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
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

function Pricing() {
  return (
    <Container disableGutters maxWidth='xl' 
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 10
        },
        my: 15
      }}
    >
      <Box 
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          alignItems: "center",
          justifyContent: "space-between"
        }} 
      >
        <Typography 
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '32px',
            color: '#161414',
            textAlign: {
              xs: 'center',
              md: 'left'
            }
          }} 
        > 
          Logements Étudiants
        </Typography>
      </Box>

      <Box 
        sx={{
          display: "flex",
          gap: '16px', 
          flexDirection: {
            xs: "column",
            md: "row"
          },
          alignItems: {
            xs: "center",
            md: "flex-start"
          },
          justifyContent: "space-between"
        }}
      >
        {data.map((item) => (
          <Housing 
            key={item.id}
            title={item.title}
            location={item.location}
            image={item.image}
            description={item.description}
            rate={item.rate}
          />
        ))}
      </Box>
    </Container>
  )
}

export default Pricing
