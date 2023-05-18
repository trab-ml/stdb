import React from 'react';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "70vw",
            sm: "60vw",
            md: "auto",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="logement"
          style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
        />
      </Box>

      <Typography
        sx={{
          mt: 1.25,
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "16px",
          color: "#161414",
          maxWidth: "252px",
        }}
      >
        {title}
      </Typography>
      
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <PlaceIcon />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "13px",
              color: "#979797",
            }}
          >
            { location }
          </Typography>
        </Box>
        <RateGiver rate={rate} />
        <p> { description } </p>
      </Box>

    </Box>
  );
};

export default Housing;