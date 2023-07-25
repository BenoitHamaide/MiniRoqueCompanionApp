import React, { useState, useEffect } from 'react';
import './PotionSelector.scss';

const PotionSelector = ({ characterStats }) => {
  const [potion1, setPotion1] = useState(0);
  const [potion2, setPotion2] = useState(0);

  // Create separate arrays for each potion selection
  const potions1 = [
    { value: 0, name: 'Aucune' },
    { value: 1, name: 'Feu' },
    { value: 2, name: 'Givre' },
    { value: 3, name: 'Poison' },
  ];

  const potions2 = [
    { value: 0, name: 'Aucune' },
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
    <div className='potion'>
      <h1>Potions</h1>
      <div className='potionChoice'>
        <div>
          <label className='potion1'>
            Potion
            <select name="potion1" value={potion1} onChange={handlePotion1Change}>
              {potions1.map((potion) => (
                <option key={potion.value} value={potion.value}>
                  {potion.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className='potion2'>
            Potion
            <select name="potion2" value={potion2} onChange={handlePotion2Change}>
              {potions2.map((potion) => (
                <option key={potion.value} value={potion.value}>
                  {potion.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PotionSelector;
