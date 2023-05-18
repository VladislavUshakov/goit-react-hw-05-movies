import Container from 'components/Container';
import UserNavigation from 'components/UserNavigation';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <header>
          <UserNavigation />
        </header>
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
