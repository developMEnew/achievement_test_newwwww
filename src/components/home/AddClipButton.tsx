import { Button } from '@mui/material';
import { Plus } from 'lucide-react';

export const AddClipButton = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={<Plus />}
      sx={{
        py: 1.5,
        borderRadius: 3,
        textTransform: 'none',
        backgroundColor: '#4285F4',
        '&:hover': {
          backgroundColor: '#3367D6',
        },
      }}
    >
      Add New Clip
    </Button>
  );
};