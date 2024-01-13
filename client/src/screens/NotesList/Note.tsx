import TrashCan from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/Visibility';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import Dialog from '../../components/Dialog';
import Markdown from 'react-markdown';
import { Note as NoteData } from '../../state/apis/apiSlice.types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UpdateNote from '../UpdateNote';
import DeleteNote from '../DeleteNote';

type Props = NoteData;

const Note = ({ _id, title, description, ...rest }: Props) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteNoteModal, setOpenDeleteNoteModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteNoteModal = () => {
    setOpenDeleteNoteModal(true);
  };

  const handleCloseDeleteNoteModal = () => {
    setOpenDeleteNoteModal(false);
  };

  return (
    <Card
      sx={{
        border: '0.5px solid lightgray',
        maxWidth: 350,
        padding: '0.7rem',
        borderRadius: '1rem',
      }}
    >
      <CardContent sx={{ maxHeight: 350, overflow: 'hidden' }}>
        <Typography
          textOverflow='ellipsis'
          overflow='hidden'
          whiteSpace='nowrap'
          gutterBottom
          variant='h5'
          component='p'
        >
          {title}
        </Typography>

        <Box>
          <Markdown
            components={{
              h1: ({ children }) => (
                <Typography variant='h5' component='h1'>
                  {children}
                </Typography>
              ),
              p: ({ children }) => (
                <Typography variant='body1' component='p'>
                  {children}
                </Typography>
              ),
              li: ({ children }) => (
                <Typography variant='body2' component='li'>
                  {children}
                </Typography>
              ),
              ol: ({ children }) => (
                <Box component='ol' sx={{ listStylePosition: 'inside' }}>
                  {children}
                </Box>
              ),
              ul: ({ children }) => (
                <Box component='ul' sx={{ listStylePosition: 'inside' }}>
                  {children}
                </Box>
              ),
            }}
          >
            {description}
          </Markdown>
        </Box>
      </CardContent>

      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Link to={`/notes/${_id}`}>
            <IconButton color='primary'>
              <EyeIcon />
            </IconButton>
          </Link>
          <IconButton onClick={handleOpenEditModal} color='primary'>
            <EditIcon />
          </IconButton>
        </Box>
        <IconButton onClick={handleOpenDeleteNoteModal}>
          <TrashCan color='secondary' />
        </IconButton>
      </Box>

      <Dialog
        open={openEditModal}
        handleClose={handleCloseEditModal}
        title='Edit Note'
      >
        <UpdateNote
          _id={_id}
          title={title}
          description={description}
          handleClose={handleCloseEditModal}
          {...rest}
        />
      </Dialog>
      <Dialog
        open={openDeleteNoteModal}
        handleClose={handleCloseDeleteNoteModal}
        title='Delete Note'
      >
        <DeleteNote _id={_id} cancelDelete={handleCloseDeleteNoteModal} />
      </Dialog>
    </Card>
  );
};

export default Note;
