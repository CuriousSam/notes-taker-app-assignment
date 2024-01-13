import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../../state/features/auth';
import { useAppSelector } from '../../state/hooks/useAppSelector';

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
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
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
