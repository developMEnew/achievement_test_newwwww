import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Search, LibraryBig, Bell, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        borderRadius: '12px 12px 0 0',
        overflow: 'hidden'
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={handleChange}
        sx={{
          height: '64px',
          '& .MuiBottomNavigationAction-root': {
            color: 'text.secondary',
            '&.Mui-selected': {
              color: 'primary.main',
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<Home />}
          disabled={!user}
        />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<Search />}
          disabled={!user}
        />
        <BottomNavigationAction
          label="Library"
          value="/library"
          icon={<LibraryBig />}
          disabled={!user}
        />
        <BottomNavigationAction
          label="Notifications"
          value="/notifications"
          icon={<Bell />}
          disabled={!user}
        />
        <BottomNavigationAction
          label="Profile"
          value="/profile"
          icon={<User />}
        />
      </BottomNavigation>
    </Paper>
  );
};