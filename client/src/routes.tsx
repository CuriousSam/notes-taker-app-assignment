import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import AuthScreenLayout from './screens/Auth/AuthScreenLayout';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import { Layout } from './screens/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthScreenLayout />,
    children: [
      { path: '/', index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/notes',
            element: <h1>Notes</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
