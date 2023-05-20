import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

const RATE_LIMIT: number[] = [1, 2, 3, 4, 5];

const RateGiver: React.FC<{ rate: number }> = ({ rate }) => {
  let remainingRate = rate;

  return (
    <React.Fragment>
      {RATE_LIMIT.map((rateVal: number, index: number) => {
        var isFullStar = remainingRate >= 1;
        remainingRate--;

        return isFullStar ? <StarIcon key={index} /> : <StarBorderIcon key={index} />;
      })}
    </React.Fragment>
  );
};

export default RateGiver;