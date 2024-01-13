import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import AddNote from './screens/AddNote';
import AuthScreenLayout, { Login, Register } from './screens/Auth';
import Layout from './screens/Layout';
import NoteDetails from './screens/NoteDetails';
import Notes from './screens/Notes';

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
            element: <Notes />,
          },
          {
            path: '/notes/new',
            element: <AddNote />,
          },
          {
            path: '/notes/:id',
            element: <NoteDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
