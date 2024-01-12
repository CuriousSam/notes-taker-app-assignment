import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Box p={5}>
        <Outlet />
      </Box>
    </main>
  );
};

export default Layout;
