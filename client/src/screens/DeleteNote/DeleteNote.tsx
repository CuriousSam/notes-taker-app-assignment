import { Button, Stack, Typography } from '@mui/material';

type Props = { _id: string; cancelDelete: () => void };

const DeleteNote = ({ _id, cancelDelete }: Props) => {
  const handleDelete = () => {
    console.log('Deleting...', _id);
  };

  return (
    <div>
      <Typography textAlign='center' variant='h6'>
        Are you sure want to delete this note?
      </Typography>
      <Stack justifyContent='center' direction='row' mt={2} gap={2}>
        <Button onClick={cancelDelete} variant='outlined' color='success'>
          Cancel
        </Button>
        <Button onClick={handleDelete} variant='contained' color='error'>
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default DeleteNote;
