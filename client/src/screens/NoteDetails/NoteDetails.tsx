import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import LeftArrow from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';

const markdown = `# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c# Heading....

This is going to be our discription

Items
1. Item a
2. Item b
3. Item c`;

const NoteDetails = () => {
  return (
    <Box component='section'>
      <Link to='/notes'>
        <Button startIcon={<LeftArrow />}>Back</Button>
      </Link>

      <Box mt={1} border='1px solid lightgray' p={4} borderRadius={5}>
        <Typography variant='h3'>{'Note title goes here'}</Typography>
        <Stack my={1} direction='row' flexWrap='wrap' gap='0.5rem 1rem'>
          <Chip
            size='small'
            color='warning'
            label={`Last Edit ${new Date().toLocaleString()}`}
          />
          <Chip
            size='small'
            color='success'
            label={`Created at ${new Date().toLocaleString()}`}
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
          {markdown}
        </Markdown>
      </Box>
    </Box>
  );
};

export default NoteDetails;
