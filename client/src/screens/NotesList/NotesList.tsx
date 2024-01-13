import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import { useNotesQuery } from '../../state/apis/apiSlice';
import Note from './Note';
import NotesListLoading from './NoteListLoading';

const NotesList = () => {
  const { data, isLoading } = useNotesQuery();

  if (isLoading) return <NotesListLoading />;

  return (
    <Box mt={3}>
      {data?.notes && (
        <Masonry
          columns={{ lg: 4, md: 3, sm: 2, xs: 1 }}
          spacing={2}
          sx={{ m: 0 }}
        >
          {data?.notes.map((note) => (
            <Note key={note._id} {...note} />
          ))}
        </Masonry>
      )}
    </Box>
  );
};

export default NotesList;
