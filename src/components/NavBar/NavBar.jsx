import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const NavBar = () => {
  return (
    <>
      <li style={{ marginLeft: 'auto', marginRight: 30, listStyle: 'none' }}>
        <NavLink to="/register">
          <Typography typography="h6" color="white">
            Sign in
          </Typography>
        </NavLink>
      </li>
      <li style={{ marginLeft: 10, marginRight: 10, listStyle: 'none' }}>
        <NavLink to="/login">
          <Typography typography="h6" color="white">
            Log in
          </Typography>
        </NavLink>
      </li>
    </>
  );
};

export default NavBar;
