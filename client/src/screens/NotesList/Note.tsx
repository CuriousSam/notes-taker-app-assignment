import TrashCan from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography
} from '@mui/material';

const Note = () => {
  return (
    <Card sx={{ maxWidth: 350, padding: '0.7rem' }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='p'>
          Title Goes Here
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Button startIcon={<EditIcon />}>Edit</Button>
          <IconButton>
            <TrashCan color='secondary' />
          </IconButton>
        </Box>
      </>
    </Card>
  );
};

export default Note;
