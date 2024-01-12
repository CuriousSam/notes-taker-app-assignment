import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../state/apis/apiSlice';
import { login } from '../../state/features/auth';
import { useAppDispatch } from '../../state/hooks/useAppDispatch';
import { UserLoginData, userLoginSchema } from '../../validations/users';
import Copyright from './Copyright';
import Link from './Link';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginUser, { data, isLoading, error }] = useLoginMutation();

  const submitHandler = (userData: UserLoginData) => {
    loginUser(userData);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  useEffect(() => {
    if (data) {
      dispatch(login(data.user));
      navigate('/notes');
    }
  }, [data]);

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Log In
      </Typography>
      <Box
        component='form'
        noValidate
        onSubmit={handleSubmit(submitHandler)}
        sx={{ mt: 1 }}
      >
        <Typography textAlign='center' color='red'>
          {(error as { data: { message?: string } })?.data?.message}
        </Typography>
        <TextField
          {...register('email')}
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          helperText={errors.email?.message?.toString()}
          error={!!errors.email}
        />
        <TextField
          {...register('password')}
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          helperText={errors.password?.message?.toString()}
          error={!!errors.password}
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          fullWidth
          disabled={isLoading}
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {isLoading ? 'Please wait...' : 'Login'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to='#'>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to='/register'>{"Don't have an account? Register"}</Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
};

export default Login;
