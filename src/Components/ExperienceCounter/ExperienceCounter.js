import React, { useState } from 'react';
import { Button } from '@mui/material';
import './ExperienceCounter.scss';

function ExperienceCounter({ handleIncrementHealth, handleAddHealth }) {
  const [experiencePoints, setExperiencePoints] = useState(0);

  const handleIncrement = () => {
    if (experiencePoints < 23) {
      setExperiencePoints((prevPoints) => prevPoints + 1);
    } else {
      // Appeler la fonction de rappel pour incrémenter les points de vie
      handleAddHealth();
    }
  };

  const handleDecrement = () => {
    if (experiencePoints > 0) {
      setExperiencePoints((prevPoints) => prevPoints - 1);
    }
  };

  const getLevel = () => {
    if (experiencePoints >= 18) {
      return 'Niveau 3: + 2 dés blancs';
    } else if (experiencePoints >= 6) {
      return 'Niveau 2: + 1 dé blanc';
    } else {
      return 'Niveau 1';
    }
  };

  return (
    <div className='experience'>
      <h1>Expérience</h1>
      
      <h2>{getLevel()}</h2>
      <h3>Points d'expérience : {experiencePoints}</h3>
      <div className='buttons'>
      <Button variant="contained" color="error" onClick={handleDecrement}>
        Diminuer
      </Button>
      <Button
        variant="contained"
        color="success"
        className="augmenter"
        onClick={handleIncrement}
        disabled={experiencePoints >= 23} // Désactiver le bouton lorsque l'expérience est à son maximum
      >
        Augmenter
      </Button>
      </div>
      <p>prouesse: -1xp</p>
    </div>
  );
}

export default ExperienceCounter;
