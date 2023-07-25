import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './LifeCounter.scss';

function LifeCounter({ characterStats, handleIncrementHealth, handleDecrementHealth }) {
  const [healthPoints, setHealthPoints] = useState(0);
  const [rationPoints, setRationPoints] = useState(0);
  const [hasDecrementedHealth, setHasDecrementedHealth] = useState(false);

  useEffect(() => {
    if (characterStats) {
      setHealthPoints(characterStats.health || 0);
      setRationPoints(characterStats.rations || 0);
    }
  }, [characterStats]);

  useEffect(() => {
    if (rationPoints === 0) {
      if (!hasDecrementedHealth) {
        setHealthPoints((prevPoints) => Math.max(prevPoints - 1, 0));
        setHasDecrementedHealth(true);
      }
    } else {
      setHasDecrementedHealth(false);
    }
  }, [rationPoints, hasDecrementedHealth]);

  const handleIncrement = () => {
    if (healthPoints < 20) {
      setHealthPoints((prevPoints) => prevPoints + 1);
    }
  };

  const handleDecrement = () => {
    if (healthPoints > 0) {
      setHealthPoints((prevPoints) => prevPoints - 1);
    }
  };

  useEffect(() => {
    if (healthPoints < 0) {
      setHealthPoints(0); // Assurer que les points de vie ne descendent pas en dessous de 0
    }
  }, [healthPoints]);

  const getStatus = () => {
    if (healthPoints === 0) {
      return 'Mort du héros';
    } else {
      return `${healthPoints}`;
    }
  };

  return (
    <div className='life'>
      <h1>Points de vie</h1>
      <h2>{getStatus()}</h2>
      <div className='buttons'>
      <Button variant="contained" color="error" onClick={handleDecrement}>
        Diminuer
      </Button>
      <Button variant="contained" color="success" onClick={handleIncrement} disabled={healthPoints >= 20}>
        Augmenter
      </Button>
      </div>
      <p>prouesse: -1pv</p>
    </div>
  );
}

export default LifeCounter;
