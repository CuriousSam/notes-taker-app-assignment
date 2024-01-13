import LeftArrow from '@mui/icons-material/ArrowBackOutlined';
import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const NoteDetailsLoading = () => {
  return (
    <Box component='section'>
      <Link to='/notes'>
        <Button startIcon={<LeftArrow />}>Back</Button>
      </Link>

      {
        <Box mt={1} border='1px solid lightgray' p={4} borderRadius={5}>
          <Typography variant='h3'>
            <Skeleton
              variant='text'
              sx={{ fontSize: '4rem', maxWidth: '450px' }}
            />
          </Typography>
          <Stack
            direction={{ sm: 'row', xs: 'column' }}
            flexWrap='wrap'
            gap='0.5rem'
          >
            <Skeleton
              variant='text'
              sx={{ fontSize: '1.5rem', maxWidth: '200px', flex: 1 }}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: '1.5rem', maxWidth: '200px', flex: 1 }}
            />
          </Stack>
          <Divider sx={{ margin: '1rem 0' }} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
        </Box>
      }
    </Box>
  );
};

export default NoteDetailsLoading;
