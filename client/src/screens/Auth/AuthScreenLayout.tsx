import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../state/hooks/useAppSelector';
import { selectUser } from '../../state/features/auth';

const AuthScreenLayout = () => {
  const user = useAppSelector(selectUser);
  if (user) return <Navigate to='/notes' />;

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthScreenLayout;
