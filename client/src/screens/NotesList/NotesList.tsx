import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import Alert from '../../components/Alert';
import { useNotesQuery } from '../../state/apis/apiSlice';
import Note from './Note';
import NotesListLoading from './NoteListLoading';
import { useAppSelector } from '../../state/hooks/useAppSelector';
import { selectUser } from '../../state/features/auth';

const NotesList = () => {
  const { data, isLoading, error } = useNotesQuery();
  const user = useAppSelector(selectUser);

  if (isLoading) return <NotesListLoading />;

  const errorMessage =
    (error as { data?: { message?: string } })?.data?.message ||
    'Unexpected error occurred!';
  if (error)
    return <Alert title='Error' severity='error' description={errorMessage} />;

  return (
    <Box mt={3}>
      {data?.notes.length === 0 && (
        <Alert
          title={`Welcome ${user?.name}! No Notes Found`}
          severity='info'
          description={`Start by creating your first note. Click the 'New Note' button to begin capturing your thoughts and ideas. Your notes will be here when you return. Happy note-taking!`}
        />
      )}
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
