import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import NotesList from '../NotesList';

const Notes = () => {
  return (
    <Box component='section'>
      <Link style={{ all: 'unset' }} to='/notes/new'>
        <Button variant='contained' startIcon={<AddIcon />}>
          New Note
        </Button>
      </Link>

      <NotesList />
    </Box>
  );
};

export default Notes;
