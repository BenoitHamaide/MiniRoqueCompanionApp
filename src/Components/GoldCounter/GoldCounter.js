import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './GoldCounter.scss';

const GoldCounter = ({ characterStats }) => {
  const [goldPoints, setGoldPoints] = useState(0);

  useEffect(() => {
    if (characterStats) {
      setGoldPoints(characterStats.gold || 0);
    }
  }, [characterStats]);

  const handleIncrement = () => {
    if (goldPoints < 10) {
      setGoldPoints((prevPoints) => prevPoints + 1);
    }
  };

  const handleDecrement = () => {
    if (goldPoints > 0) {
      setGoldPoints((prevPoints) => prevPoints - 1);
    }
  };

  const getStatus = () => {
    return `Pièces d'or : ${goldPoints} / 10`;
  };

  return (
    <div>
      <h2>{getStatus()}</h2>
      <Button variant="contained" color='error' onClick={handleDecrement}>Dépenser une pièce d'or</Button>
      <Button variant="contained" color='success' onClick={handleIncrement} disabled={goldPoints >= 10}>Gagner une pièce d'or</Button>
    </div>
  );
};

export default GoldCounter;
