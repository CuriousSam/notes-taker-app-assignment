import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../../state/features/auth';
import { useAppSelector } from '../../state/hooks/useAppSelector';

const RequireAuth = () => {
  const user = useAppSelector(selectUser);
  if (!user) return <Navigate to='/' />;

  return <Outlet />;
};

export default RequireAuth;
