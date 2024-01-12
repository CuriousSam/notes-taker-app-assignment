import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <section>
      <Button variant='outlined' startIcon={<AddIcon />}>
        <Link style={{ all: 'unset' }} to='/notes/new'>
          New Note
        </Link>
      </Button>
    </section>
  );
};

export default Notes;
