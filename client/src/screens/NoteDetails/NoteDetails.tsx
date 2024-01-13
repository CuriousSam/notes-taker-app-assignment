import LeftArrow from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { useNoteQuery } from '../../state/apis/apiSlice';
import NoteDetailsLoading from './NoteDetailsLoading';

const NoteDetails = () => {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useNoteQuery(params.id ?? '');

  if (isLoading) return <NoteDetailsLoading />;

  return (
    <Box component='section'>
      <Link to='/notes'>
        <Button startIcon={<LeftArrow />}>Back</Button>
      </Link>

      {data && (
        <Box mt={1} border='1px solid lightgray' p={4} borderRadius={5}>
          <Typography variant='h3'>{data.note.title}</Typography>
          <Stack my={1} direction='row' flexWrap='wrap' gap='0.5rem 1rem'>
            <Chip
              size='small'
              color='warning'
              label={`Last Edit ${new Date(
                data?.note.updatedAt
              ).toLocaleString()}`}
            />
            <Chip
              size='small'
              color='success'
              label={`Created at ${new Date(
                data?.note.createdAt
              ).toLocaleString()}`}
            />
          </Stack>
          <Divider sx={{ margin: '1rem 0' }} />
          <Markdown
            components={{
              h1: ({ children }) => (
                <Typography variant='h3' component='h1'>
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
            {data?.note.description}
          </Markdown>
        </Box>
      )}
    </Box>
  );
};

export default NoteDetails;
