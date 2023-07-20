import { Button } from '@mui/material';
import './LifeCounter.scss';
import { useState } from 'react';

function LifeCounter() {
    const [healthPoints, setHealthPoints] = useState(0);

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
    
      const getStatus = () => {
        if (healthPoints === 0) {
          return 'Mort du héros';
        } else {
          return `Points de vie : ${healthPoints}`;
        }
      };

    return (
        <div>
            <h2>PV</h2>
            <h3>prouesse: -2pv</h3>
            <h2>{getStatus()}</h2>
            <Button variant="contained" color='error' onClick={handleDecrement} >
                Diminuer PV
            </Button>
            <Button variant="contained" color='success' onClick={handleIncrement} disabled={healthPoints >= 20}>
                Augmenter PV
            </Button>
            
        </div>
    );
}

export default LifeCounter;