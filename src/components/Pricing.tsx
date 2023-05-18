import React from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Housing from './Housing';

const data = [
  {
    title: 'Chambre T2',
    location: "Résidence de l'Artois, Arras",
    image: 'chambre_t2_artois.',
    description: "Ce logement étudiant de 20m² à proximité de l'Université, est à 15mns de la gare d'Arras à pied."
    // ratingImage={item.ratingImage}
  }
]

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
          gap: '4',
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
        {data.map((item, index) => (
          <Housing 
            key={index}
            title={item.title}
            location={item.location}
            image={item.image}
            description={item.description}
          />
        ))}
      </Box>
    </Container>
  )
}

export default Pricing
