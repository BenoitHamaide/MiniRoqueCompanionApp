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
    return `Ration : ${rationPoints} / 4`;
  };

  return (
    <div>
      <h2>{getStatus()}</h2>
      <Button variant="contained" color="error" onClick={handleDecrement} disabled={false}>
        Diminuer Ration
      </Button>
      <Button variant="contained" color="success" onClick={handleIncrement} disabled={rationPoints >= 4}>
        Augmenter Ration
      </Button>
    </div>
  );
};

export default RationCounter;
