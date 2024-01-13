import styled from '@mui/material/styles/styled';

export const ContentContainer = styled('div')(({ theme }) => ({
  padding: '2rem 1rem',
  [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
    padding: '2rem 2rem',
  },
  [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
    padding: '2rem 4rem',
  },
}));
