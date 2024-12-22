import { Box, Avatar, Typography } from '@mui/material';
import { User } from 'firebase/auth';

interface UserInfoProps {
  user: User;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
      <Avatar
        src={user.photoURL || undefined}
        alt={user.displayName || 'User'}
        sx={{ width: 64, height: 64 }}
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {user.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Box>
    </Box>
  );
};