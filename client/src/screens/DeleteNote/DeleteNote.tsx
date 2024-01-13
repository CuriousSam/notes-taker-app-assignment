import { Button, Stack, Typography } from '@mui/material';
import { useDeleteNoteMutation } from '../../state/apis/apiSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

type Props = { _id: string; closeDeleteModal: () => void };

const DeleteNote = ({ _id, closeDeleteModal: cancelDelete }: Props) => {
  const [deleteNote, { data, isLoading, error }] = useDeleteNoteMutation();

  const handleDelete = () => {
    deleteNote(_id);
  };

  useEffect(() => {
    if (data) {
      cancelDelete();
      toast.success('Note deleted successfully!');
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const message =
        (error as { data: { message?: string } })?.data?.message ||
        'Unexpected error occurred!';
      toast.success(message);
    }
  }, [error]);

  return (
    <div>
      <Typography textAlign='center' variant='h6'>
        Are you sure want to delete this note?
      </Typography>
      <Stack justifyContent='center' direction='row' mt={2} gap={2}>
        <Button
          disabled={isLoading}
          onClick={cancelDelete}
          variant='outlined'
          color='success'
        >
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleDelete}
          variant='contained'
          color='error'
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </Stack>
    </div>
  );
};

export default DeleteNote;
