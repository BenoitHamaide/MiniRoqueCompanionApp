import { Button } from '@mui/material';
import './ExperienceCounter.scss';
import { useState } from 'react';

function ExperienceCounter({ handleIncrementHealth }) {
  const [experiencePoints, setExperiencePoints] = useState(0);

  const handleIncrement = () => {
    if (experiencePoints < 23) {
      setExperiencePoints((prevPoints) => prevPoints + 1);
    } else {
      // Appeler la fonction de rappel pour incrémenter les points de vie
      handleIncrementHealth();
    }
  };

  const handleDecrement = () => {
    if (experiencePoints > 0) {
      setExperiencePoints((prevPoints) => prevPoints - 1);
    }
  };

  const getLevel = () => {
    if (experiencePoints >= 18) {
      return 'Niveau 3';
    } else if (experiencePoints >= 6) {
      return 'Niveau 2';
    } else {
      return 'Niveau 1';
    }
  };

  return (
    <div>
      <h2>Expérience</h2>
      <h3>prouesse: -1xp</h3>
      <h2>{getLevel()}</h2>
      <p>Points d'expérience : {experiencePoints}</p>
      <Button variant="contained" color="error" onClick={handleDecrement}>
        Diminuer
      </Button>
      {/* Le bouton Augmenter est toujours actif une fois atteint 23 points */}
      <Button
        variant="contained"
        color="success"
        className="augmenter"
        onClick={handleIncrement}
        // On retire la désactivation du bouton ici
      >
        Augmenter
      </Button>
    </div>
  );
}

export default ExperienceCounter;
