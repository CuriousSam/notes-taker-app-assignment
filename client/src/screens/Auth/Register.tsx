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
import { useRegisterMutation } from '../../state/apis/apiSlice';
import { login } from '../../state/features/auth';
import { useAppDispatch } from '../../state/hooks/useAppDispatch';
import { UserRegisterData, userRegisterSchema } from '../../validations/users';
import Copyright from './Copyright';
import Link from './Link';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [registerUser, { data, isLoading, error }] = useRegisterMutation();

  const submitHandler = (userData: UserRegisterData) => {
    registerUser(userData);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
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
        Register
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
          {...register('name')}
          autoFocus
          margin='normal'
          required
          fullWidth
          id='name'
          label='Name'
          name='name'
          helperText={errors.name?.message?.toString()}
          error={!!errors.name?.message}
        />

        <TextField
          {...register('email')}
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          helperText={errors.email?.message?.toString()}
          error={!!errors.email?.message}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          {...register('password')}
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          helperText={errors.password?.message?.toString()}
          error={!!errors.password?.message}
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
          {isLoading ? 'Please wait...' : 'Register'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to='#'>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to='/'>{'Already have an account? Log In'}</Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
};

export default Register;
