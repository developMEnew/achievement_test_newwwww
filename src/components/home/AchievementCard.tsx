import { Paper, Typography, Box } from '@mui/material';

interface AchievementCardProps {
  name: string;
  points: number;
  percentage: string;
  code: string;
  month: string;
}

export const AchievementCard = ({ name, points, percentage, code, month }: AchievementCardProps) => {
  return (
    <Paper
      sx={{
        background: 'linear-gradient(135deg, #4285F4 0%, #5B9BFF 100%)',
        color: 'white',
        p: 3,
        borderRadius: 4,
        mb: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5, textTransform: 'uppercase' }}>
            ACHIEVEMENTS
          </Typography>
          <Typography variant="h6">{name}</Typography>
        </Box>
        <Typography variant="subtitle1">{month}</Typography>
      </Box>
      
      <Typography variant="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
        {points.toLocaleString()}
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {percentage}%
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {code}
        </Typography>
      </Box>
    </Paper>
  );
};