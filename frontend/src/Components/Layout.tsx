import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from 'semantic-ui-react';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;
