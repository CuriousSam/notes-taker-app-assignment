import { yupResolver } from '@hookform/resolvers/yup';
import LeftArrow from '@mui/icons-material/ArrowBackOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, TextField, Typography } from '@mui/material';
import 'easymde/dist/easymde.min.css';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';
import { Note as NoteData } from '../../state/apis/apiSlice.types';
import { CreateNotesData, createNotesSchema } from '../../validations/notes';

type Props = NoteData;

const UpdateNote = ({ title, description }: Props) => {
  const submitHandler = (data: CreateNotesData) => {
    console.log(data);
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
          <Button type='submit' startIcon={<SaveIcon />} variant='contained'>
            Update
          </Button>
          <Link style={{ all: 'unset' }} to='/notes'>
            <Button startIcon={<LeftArrow />}>Back</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateNote;
