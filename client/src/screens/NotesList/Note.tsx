import TrashCan from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { Note as NoteData } from '../../state/apis/apiSlice.types';
import Markdown from 'react-markdown';

type Props = NoteData;

const Note = ({ title, description }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        padding: '0.7rem',
      }}
    >
      <CardContent sx={{ maxHeight: 350, overflow: 'hidden' }}>
        <Typography gutterBottom variant='h5' component='p'>
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
        <Button startIcon={<EditIcon />}>Edit</Button>
        <IconButton>
          <TrashCan color='secondary' />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Note;
