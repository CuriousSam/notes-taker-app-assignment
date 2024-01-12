import { createBrowserRouter } from 'react-router-dom';
import AuthScreenLayout from './screens/Auth/AuthScreenLayout';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthScreenLayout />,
    children: [
      { path: '/', index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

export default router;
