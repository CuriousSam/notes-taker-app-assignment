import Masonry from '@mui/lab/Masonry';
import { Box, Card, CardContent, Skeleton, Typography } from '@mui/material';

const NoteLoading = () => {
  const generateRandomNumberInRange = (min: number, max: number) => {
    if (min > max) {
      throw new Error('Invalid range: min should be less than or equal to max');
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Card
      sx={{
        border: '0.5px solid lightgray',
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
          <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
        </Typography>

        <Box>
          {[...Array(generateRandomNumberInRange(2, 8)).keys()].map((item) => (
            <Skeleton key={item} variant='text' sx={{ fontSize: '1rem' }} />
          ))}
        </Box>
      </CardContent>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p='0.3rem 1rem'
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          gap={2}
        >
          <Skeleton variant='circular' width={30} height={30} />
          <Skeleton variant='circular' width={30} height={30} />
        </Box>
        <Skeleton variant='circular' width={30} height={30} />
      </Box>
    </Card>
  );
};

const NotesListLoading = () => {
  const list = [...Array(12).keys()];

  return (
    <Box mt={3}>
      {list && (
        <Masonry
          columns={{ lg: 4, md: 3, sm: 2, xs: 1 }}
          spacing={2}
          sx={{ m: 0 }}
        >
          {list.map((item) => (
            <NoteLoading key={item} />
          ))}
        </Masonry>
      )}
    </Box>
  );
};

export default NotesListLoading;
