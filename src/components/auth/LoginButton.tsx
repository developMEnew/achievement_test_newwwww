import { Button } from '@mui/material';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const LoginButton = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Button
      variant="contained"
      onClick={signInWithGoogle}
      startIcon={<LogIn />}
      fullWidth
      size="large"
      sx={{
        py: 1.5,
        fontSize: '1rem',
      }}
    >
      Sign in with Google
    </Button>
  );
};