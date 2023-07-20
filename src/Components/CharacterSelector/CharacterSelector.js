import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CharacterSelector = ({ characters, onUpdateStats }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (event) => {
    const selectedCharacterName = event.target.value;
    const selectedCharacterData = characters.find(
      (character) => character.name === selectedCharacterName
    );
    setSelectedCharacter(selectedCharacterData);
    onUpdateStats(selectedCharacterData.stats);
  };

  return (
    <div>
      <h2>Sélectionnez votre personnage :</h2>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Personnage</InputLabel>
        <Select value={selectedCharacter?.name || ''} onChange={handleCharacterSelect} label="Personnage">
          {characters.map((character) => (
            <MenuItem key={character.name} value={character.name}>
              {character.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CharacterSelector;
