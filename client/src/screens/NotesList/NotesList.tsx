import { Box } from '@mui/material';
import Note from './Note';
import { useNotesQuery } from '../../state/apis/apiSlice';
import Masonry from '@mui/lab/Masonry';

const NotesList = () => {
  const { data } = useNotesQuery();

  return (
    <Box mt={3}>
      {data?.notes && (
        <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
          {data?.notes.map((note) => (
            <Note key={note._id} {...note} />
          ))}
        </Masonry>
      )}
    </Box>
  );
};

export default NotesList;
