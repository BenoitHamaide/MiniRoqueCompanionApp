import React, { useState, useEffect } from 'react';
import './PotionSelector.scss';

const PotionSelector = ({ characterStats }) => {
  const [potion1, setPotion1] = useState(0);
  const [potion2, setPotion2] = useState(0);

  // Create separate arrays for each potion selection
  const potions1 = [
    { value: 0, name: '0' },
    { value: 1, name: 'Feu' },
    { value: 2, name: 'Givre' },
    { value: 3, name: 'Poison' },
  ];

  const potions2 = [
    { value: 0, name: '0' },
    { value: 4, name: 'Soins' },
    { value: 5, name: 'Eau Bénite' },
    { value: 6, name: 'Perception' },
  ];

  useEffect(() => {
    if (characterStats) {
      // Update potion values based on characterStats
      setPotion1(characterStats.potion1 || 0);
      setPotion2(characterStats.potion2 || 0);
    }
  }, [characterStats]);

  const handlePotion1Change = (event) => {
    setPotion1(parseInt(event.target.value, 10));
  };

  const handlePotion2Change = (event) => {
    setPotion2(parseInt(event.target.value, 10));
  };

  // Helper function to get the name of the selected potion
  const getPotionName = (potionNumber, potionArray) => {
    const selectedPotion = potionArray.find((potion) => potion.value === potionNumber);
    return selectedPotion ? selectedPotion.name : '';
  };

  return (
    <div>
      <h2>Sélecteur de Potions</h2>
      <div>
        <label>
          Potion 1 :
          {potions1.map((potion) => (
            <span key={potion.value}>
              <input
                type="radio"
                name="potion1"
                value={potion.value}
                checked={potion1 === potion.value}
                onChange={handlePotion1Change}
              />{' '}
              {potion.name}
            </span>
          ))}
        </label>
      </div>
      <div>
        <label>
          Potion 2 :
          {potions2.map((potion) => (
            <span key={potion.value}>
              <input
                type="radio"
                name="potion2"
                value={potion.value}
                checked={potion2 === potion.value}
                onChange={handlePotion2Change}
              />{' '}
              {potion.name}
            </span>
          ))}
        </label>
      </div>
      <div>
        <p>Potion 1 sélectionnée : {getPotionName(potion1, potions1)}</p>
        <p>Potion 2 sélectionnée : {getPotionName(potion2, potions2)}</p>
      </div>
    </div>
  );
};

export default PotionSelector;
