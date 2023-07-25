import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './RationCounter.scss';

const RationCounter = ({ characterStats, handleDecrementHealth }) => {
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

  useEffect(() => {
    if (rationPoints === 0 && characterStats && characterStats.rations === 0) {
      handleDecrementHealth(); // Déduire 3 points de vie lorsque le compteur de ration passe à 0
    }
  }, [rationPoints, characterStats, handleDecrementHealth]);

  const getStatus = () => {
    return `${rationPoints} / 4`;
  };

  return (
    <div className='ration'>
      <h1>Rations</h1>
      <h2>{getStatus()}</h2>
      <div className='buttons'>
      <Button variant="contained" color="error" onClick={handleDecrement} disabled={false}>
        Diminuer
      </Button>
      <Button variant="contained" color="success" onClick={handleIncrement} disabled={rationPoints >= 4}>
        Augmenter
      </Button>
      </div>
    </div>
  );
};

export default RationCounter;
