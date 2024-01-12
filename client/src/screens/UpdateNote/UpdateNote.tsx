import { yupResolver } from '@hookform/resolvers/yup';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box, Button, TextField, Typography } from '@mui/material';
import 'easymde/dist/easymde.min.css';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SimpleMDE from 'react-simplemde-editor';
import { useUpdateNoteMutation } from '../../state/apis/apiSlice';
import { Note as NoteData } from '../../state/apis/apiSlice.types';
import { CreateNotesData, createNotesSchema } from '../../validations/notes';

type Props = NoteData & { handleClose: () => void };

const UpdateNote = ({ _id, title, description, handleClose }: Props) => {
  const [updateNote, { data, isLoading, error }] = useUpdateNoteMutation();

  const submitHandler = (data: CreateNotesData) => {
    updateNote({ _id, ...data });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createNotesSchema),
    defaultValues: {
      title,
      description,
    },
  });

  useEffect(() => {
    if (data) {
      toast.success('Note update successfully!');
      handleClose();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const message =
        (error as { data: { message?: string } })?.data?.message ||
        'Unexpected error occurred!';
      toast.error(message);
    }
  }, [error]);

  return (
    <Box>
      <Box component='form' onSubmit={handleSubmit(submitHandler)}>
        <TextField
          {...register('title')}
          autoFocus
          margin='normal'
          required
          fullWidth
          id='title'
          label='Title'
          name='title'
          helperText={errors.title?.message?.toString()}
          error={!!errors.title}
        />
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        <Typography mb={2} color='red'>
          {errors.description?.message?.toString()}
        </Typography>
        <Box
          mb={2}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Button
            disabled={isLoading}
            type='submit'
            startIcon={<SaveAsIcon />}
            variant='contained'
          >
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateNote;
