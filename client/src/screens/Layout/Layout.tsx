import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { ContentContainer } from './Layout.styled';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </main>
  );
};

export default Layout;
