import styled from '@mui/material/styles/styled';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

const Link = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default Link;
