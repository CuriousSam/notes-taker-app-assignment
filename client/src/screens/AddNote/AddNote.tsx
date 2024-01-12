import { yupResolver } from '@hookform/resolvers/yup';
import LeftArrow from '@mui/icons-material/ArrowBackOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, TextField, Typography } from '@mui/material';
import 'easymde/dist/easymde.min.css';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';
import { useAddNoteMutation } from '../../state/apis/apiSlice';
import { CreateNotesData, createNotesSchema } from '../../validations/notes';

const AddNote = () => {
  const [addNote, { data, isLoading, error }] = useAddNoteMutation();

  const submitHandler = (data: CreateNotesData) => {
    console.log(data);
    addNote(data);
  };

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createNotesSchema) });

  useEffect(() => {
    if (data) {
      reset();
      toast.success('Note saved!');
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const message =
        (error as { data: { message: string } })?.data?.message ||
        'Something went wrong!';
      toast.error(message);
    }
  }, [error]);

  return (
    <section>
      <Box
        mb={2}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography fontSize={25} component='h1'>
          Create a New Note
        </Typography>
      </Box>

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
            startIcon={<SaveIcon />}
            variant='contained'
          >
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
          <Link style={{ all: 'unset' }} to='/notes'>
            <Button startIcon={<LeftArrow />}>Back</Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default AddNote;
