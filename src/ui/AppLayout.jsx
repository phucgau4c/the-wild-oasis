import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import styled from 'styled-components';
import { useEffect } from 'react';

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const titles = {
    dashboard: 'Home',
    bookings: 'Bookings',
    cabins: 'Cabins',
    users: 'Users',
    checkin: 'Check in',
    settings: 'Settings',
    account: 'Account',
    login: 'Login',
  };
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    const locationTitle = location.pathname.split('/');
    document.title =
      `${titles[locationTitle[1]]} ${locationTitle[2] || ''}` || '404';
  }, [location]);

  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
