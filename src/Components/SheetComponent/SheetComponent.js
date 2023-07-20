
import { Grid, Container, Card, CardContent } from '@mui/material';
import ArmorCounter from '../ArmorCounter/ArmorCounter';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';
import GoldCounter from '../GoldCounter/GoldCounter';
import Header from '../Header/Header';
import LifeCounter from '../LifeCounter/LifeCounter';
import PotionSelector from '../PotionSelector/PotionSelector';
import RationCounter from '../RationCounter/RationCounter';
import './SheetComponent.scss';

function SheetComponent() {
  return (
    <div>
      <Header />
      <Container>
        <h2>Plateau personnage</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" >
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
                <LifeCounter />
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
