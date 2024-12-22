import { FormControlLabel, Switch } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export const DevAccountToggle = () => {
  const { useTempDevAccount, toggleTempDevAccount } = useAuth();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <FormControlLabel
      control={
        <Switch
          checked={useTempDevAccount}
          onChange={toggleTempDevAccount}
          color="primary"
        />
      }
      label="Use Dev Account"
      sx={{ mt: 2 }}
    />
  );
};