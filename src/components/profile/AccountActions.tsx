import { Box, Button, Divider } from '@mui/material';
import { LogOut, Settings, Shield, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const AccountActions = () => {
  const { logout } = useAuth();

  const actions = [
    { icon: <Settings size={20} />, label: 'Settings', onClick: () => {} },
    { icon: <Shield size={20} />, label: 'Privacy', onClick: () => {} },
    { icon: <Bell size={20} />, label: 'Notifications', onClick: () => {} },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {actions.map((action, index) => (
        <Button
          key={action.label}
          variant="text"
          startIcon={action.icon}
          onClick={action.onClick}
          sx={{
            justifyContent: 'flex-start',
            color: 'text.primary',
            py: 1.5,
          }}
        >
          {action.label}
        </Button>
      ))}
      
      <Divider sx={{ my: 2 }} />
      
      <Button
        variant="outlined"
        color="error"
        startIcon={<LogOut size={20} />}
        onClick={logout}
        sx={{ py: 1.5 }}
      >
        Sign Out
      </Button>
    </Box>
  );
};