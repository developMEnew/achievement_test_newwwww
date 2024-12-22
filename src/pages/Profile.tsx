import { Box, Paper } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { LoginButton } from '../components/auth/LoginButton';
import { UserInfo } from '../components/profile/UserInfo';
import { AccountActions } from '../components/profile/AccountActions';
import { DevAccountToggle } from '../components/auth/DevAccountToggle';

export const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Box sx={{ 
        p: 3, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <LoginButton />
          <DevAccountToggle />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          borderRadius: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <UserInfo user={user} />
        <AccountActions />
        <DevAccountToggle />
      </Paper>
    </Box>
  );
};