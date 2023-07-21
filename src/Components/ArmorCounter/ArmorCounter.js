import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './ArmorCounter.scss';

const ArmorCounter = ({ characterStats }) => {
  const [armorPoints, setArmorPoints] = useState(0);

  useEffect(() => {
    if (characterStats) {
      setArmorPoints(characterStats.armor || 0);
    }
  }, [characterStats]);

  const handleIncrement = () => {
    if (armorPoints < 4) {
      setArmorPoints((prevPoints) => prevPoints + 1);
    }
  };

  const handleDecrement = () => {
    if (armorPoints > 0) {
      setArmorPoints((prevPoints) => prevPoints - 1);
    }
  };

  return (
    <div>
      <h2>Armure</h2>
      <div>
        <Button variant="contained" color='error' onClick={handleDecrement}>-</Button>
        <span>{armorPoints}</span>
        <Button variant="contained" color='success' onClick={handleIncrement} disabled={armorPoints >= 4}>+</Button>
      </div>
    </div>
  );
};

export default ArmorCounter;


