import React, { useState } from 'react';
import { Grid, Container, Card, CardContent } from '@mui/material';
import ArmorCounter from '../ArmorCounter/ArmorCounter';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';
import GoldCounter from '../GoldCounter/GoldCounter';
import Header from '../Header/Header';
import LifeCounter from '../LifeCounter/LifeCounter';
import PotionSelector from '../PotionSelector/PotionSelector';
import RationCounter from '../RationCounter/RationCounter';
import './SheetComponent.scss';
import ButtonHome from '../ButtonHome/ButtonHome';
import CharacterSelector from '../CharacterSelector/CharacterSelector';
import StatusCard from '../StatusCard/StatusCard';

function SheetComponent() {
  const characters = [
    {
      name: 'Croisé',
      stats: { health: 10, armor: 1, rations: 4, potion1: 0, potion2: 0 },
    },
    {
      name: 'Prêtresse',
      stats: { health: 13, gold: 2, rations: 3, potion1: 0, potion2: 5 },
    },
    {
      name: 'Rogue',
      stats: { health: 10, gold: 5, rations: 3, potion1: 0, potion2: 0 },
    },
    {
      name: 'Mage',
      stats: { health: 11, gold: 3, rations: 4, potion1: 0, potion2: 6 },
    },
    {
      name: 'Sorcière',
      stats: { health: 10, rations: 3, potion1: 3, potion2: 0 },
    },
    {
      name: 'Bones',
      stats: { health: 10, experience: 2, rations: 2, potion1: 0, potion2: 0 },
    },
    {
      name: 'Voleur',
      stats: { health: 10, gold: 10, rations: 1, potion1: 0, potion2: 6 },
    },
    {
      name: 'Clerc',
      stats: { health: 9, armor: 1, rations: 2, potion1: 0, potion2: 4 },
    },
  ];

  const [characterStats, setCharacterStats] = useState(null);
  const [isCursed, setIsCursed] = useState(false);
  const [isPoisoned, setIsPoisoned] = useState(false);

  const handleCursedChange = () => {
    setIsCursed(!isCursed);
  };

  const handlePoisonedChange = () => {
    setIsPoisoned(!isPoisoned);
  };

  const handleIncrementHealth = () => {
    if (characterStats && characterStats.health < 20) {
      setCharacterStats((prevStats) => ({
        ...prevStats,
        health: prevStats.health + 1,
      }));
    }
  };

  const handleDecrementHealth = () => {
    if (characterStats && characterStats.health > 0) {
      setCharacterStats((prevStats) => ({
        ...prevStats,
        health: prevStats.health - 1,
      }));
    }
  };

  const handleAddHealth = () => {
    if (characterStats?.health < 20 && characterStats?.health >= 0) {
      setCharacterStats((prevStats) => ({
        ...prevStats,
        health: prevStats.health + 1,
      }));
    }
  };

  const updateCharacterStats = (stats) => {
    setCharacterStats(stats);
  };

  return (
    <div>
      <Header />
      <div>
        <ButtonHome />
      </div>
      <Container>
        <h2>Plateau personnage</h2>
        <CharacterSelector characters={characters} onUpdateStats={updateCharacterStats} />
        {characterStats && (
          <Grid className="selection" container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <StatusCard
                    isCursed={isCursed}
                    isPoisoned={isPoisoned}
                    onCursedChange={handleCursedChange}
                    onPoisonedChange={handlePoisonedChange}
                  />
                </CardContent>
              </Card>
            </Grid>
              <Card variant="outlined">
                <CardContent className="experience-card">
                  <ExperienceCounter
                    handleIncrementHealth={handleIncrementHealth}
                    characterStats={characterStats}
                    handleAddHealth={handleAddHealth}
                  />
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent className="armor-card">
                  <ArmorCounter characterStats={characterStats} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent className="health-card">
                  <LifeCounter
                    characterStats={characterStats}
                    handleIncrementHealth={handleIncrementHealth}
                    handleDecrementHealth={handleDecrementHealth}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent className="ration-card">
                  <RationCounter
                    characterStats={characterStats}
                    handleDecrementHealth={handleDecrementHealth}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent className="gold-card">
                  <GoldCounter characterStats={characterStats} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardContent className="potion-card">
                  <PotionSelector characterStats={characterStats} />
                </CardContent>
              </Card>
            </Grid>
           
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default SheetComponent;