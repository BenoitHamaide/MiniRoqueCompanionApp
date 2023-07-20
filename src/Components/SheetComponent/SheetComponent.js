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

function SheetComponent() {
  const characters = [
    {
      name: 'Croisé',
      stats: { health: 10, armor: 1, rations: 4 },
    },
    {
      name: 'Prêtresse',
      stats: { health: 13, gold: 2, rations: 3, 'eau bénite': 1 },
    },
    {
      name: 'Rogue',
      stats: { health: 10, gold: 5, rations: 3 },
    },
    {
      name: 'Mage',
      stats: { health: 11, gold: 3, rations: 4, 'potion de perception': 1 },
    },
  ];

  const [characterStats, setCharacterStats] = useState(null);

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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="experience-card">
                <ExperienceCounter />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="armor-card">
                <ArmorCounter />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="health-card">
                {/* Utiliser uniquement le LifeCounter qui reçoit les stats du personnage sélectionné */}
                <LifeCounter characterStats={characterStats} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="ration-card">
                <RationCounter />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="gold-card">
                <GoldCounter />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent className="potion-card">
                <PotionSelector />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SheetComponent;
