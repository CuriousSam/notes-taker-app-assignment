import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import Alert from '../../components/Alert';
import { useNotesQuery } from '../../state/apis/apiSlice';
import Note from './Note';
import NotesListLoading from './NoteListLoading';

const NotesList = () => {
  const { data, isLoading, error } = useNotesQuery();

  if (isLoading) return <NotesListLoading />;

  const errorMessage =
    (error as { data?: { message?: string } })?.data?.message ||
    'Unexpected error occurred!';
  if (error)
    return <Alert title='Error' severity='error' description={errorMessage} />;

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
