import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './RationCounter.scss';

const RationCounter = ({ characterStats }) => {
  const [rationPoints, setRationPoints] = useState(0);

  useEffect(() => {
    if (characterStats) {
      setRationPoints(characterStats.rations || 0);
    }
  }, [characterStats]);

  const handleIncrement = () => {
    if (rationPoints < 4) {
      setRationPoints((prevPoints) => prevPoints + 1);
    }
  };

  const handleDecrement = () => {
    if (rationPoints > 0) {
      setRationPoints((prevPoints) => prevPoints - 1);
    }
  };

  const getStatus = () => {
    return `Ration : ${rationPoints} / 4`;
  };

  return (
    <div>
      <h2>{getStatus()}</h2>
      <Button variant="contained" color='error' onClick={handleDecrement}>Diminuer Ration</Button>
      <Button variant="contained" color='success' onClick={handleIncrement} disabled={rationPoints >= 4}>
        Augmenter Ration
      </Button>
    </div>
  );
};

export default RationCounter;
