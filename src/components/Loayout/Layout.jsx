import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import NavBar from 'components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <AppBar component="header" position="static">
        <Toolbar>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Typography typography="h5" color="white">
                  Home
                </Typography>
              </Link>
            </li>
          </ul>
          {isLoggedIn && (
            <Link to="contacts">
              <Typography
                style={{ marginLeft: 35 }}
                typography="h6"
                color="white"
              >
                Contacts
              </Typography>
            </Link>
          )}

          {isLoggedIn ? <UserMenu /> : <NavBar />}
        </Toolbar>
      </AppBar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
