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
    return `${goldPoints} / 10`;
  };

  return (
    <div className='gold'>
      <h1>Pièces d'or</h1>
      <h2>{getStatus()}</h2>
      <div className='buttons'>
      <Button variant="contained" color='error' onClick={handleDecrement}>Dépenser</Button>
      <Button variant="contained" color='success' onClick={handleIncrement} disabled={goldPoints >= 10}>Gagner</Button>
      </div>
    </div>
  );
};

export default GoldCounter;
