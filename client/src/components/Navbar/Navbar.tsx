import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import BookIcon from '@mui/icons-material/BookOutlined';
import { Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../state/features/auth';
import { useAppDispatch } from '../../state/hooks/useAppDispatch';
import { useAppSelector } from '../../state/hooks/useAppSelector';

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/notes');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={navigateToHome}
          >
            <BookIcon />
          </IconButton>
          <Typography
            onClick={navigateToHome}
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Notes Taker
          </Typography>
          <Tooltip title={`Logged in as ${user!.name}`}>
            <IconButton>
              <UserIcon htmlColor='white' />
            </IconButton>
          </Tooltip>
          <Button onClick={handleLogout} color='inherit'>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
