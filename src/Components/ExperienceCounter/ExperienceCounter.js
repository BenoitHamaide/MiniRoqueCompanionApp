import { Button } from '@mui/material';
import './ExperienceCounter.scss';
import { useState } from 'react';


function ExperienceCounter() {
    const [experiencePoints, setExperiencePoints] = useState(0);

    const handleIncrement = () => {
        if (experiencePoints < 23) {
          setExperiencePoints((prevPoints) => prevPoints + 1);
        } else {
          // Si le compteur est déjà à 23 points, incrémenter les PV de 1
          // Ici, tu peux ajouter la logique pour incrémenter les PV
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
                <Button   variant="contained" color='error' onClick={handleDecrement} >
                    Diminuer
                </Button>
                <Button variant="contained" color='success' className='augmenter' onClick={handleIncrement} disabled={experiencePoints >= 23}>
                    Augmenter
                </Button>
        </div>
    );
}

export default ExperienceCounter;