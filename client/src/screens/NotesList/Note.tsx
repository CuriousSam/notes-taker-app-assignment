import TrashCan from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/Visibility';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import { Note as NoteData } from '../../state/apis/apiSlice.types';

type Props = NoteData;

const Note = ({ title, description }: Props) => {
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
          <IconButton color='primary'>
            <EyeIcon />
          </IconButton>
          <IconButton color='primary'>
            <EditIcon />
          </IconButton>
        </Box>
        <IconButton>
          <TrashCan color='secondary' />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Note;
