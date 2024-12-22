import { Paper, Typography } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string | number;
}

export const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        textAlign: 'left',
        height: '100%',
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
    </Paper>
  );
};