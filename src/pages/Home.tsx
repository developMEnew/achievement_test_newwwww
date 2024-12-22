import { Box, Grid } from '@mui/material';
import { AchievementCard } from '../components/home/AchievementCard';
import { StatCard } from '../components/home/StatCard';
import { AddClipButton } from '../components/home/AddClipButton';

export const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <AchievementCard
        name="John Doe"
        points={45500}
        percentage="51.7045454545454"
        code="BB000"
        month="January"
      />

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <StatCard title="Available Working days" value={22} />
        </Grid>
        <Grid item xs={6}>
          <StatCard title="percentage" value="22.56%" />
        </Grid>
        <Grid item xs={6}>
          <StatCard title="need for 100%" value={6544} />
        </Grid>
        <Grid item xs={6}>
          <StatCard title="daily percentage" value="67.56%" />
        </Grid>
      </Grid>

      <AddClipButton />
    </Box>
  );
};