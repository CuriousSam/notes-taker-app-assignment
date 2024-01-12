import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Box px={5} py={3}>
        <Outlet />
      </Box>
    </main>
  );
};

export default Layout;
