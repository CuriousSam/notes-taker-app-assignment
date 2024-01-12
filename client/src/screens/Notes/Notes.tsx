import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import NotesList from '../NotesList';

const Notes = () => {
  return (
    <Box component='section'>
      <Button variant='outlined' startIcon={<AddIcon />}>
        <Link style={{ all: 'unset' }} to='/notes/new'>
          New Note
        </Link>
      </Button>

      <NotesList />
    </Box>
  );
};

export default Notes;
