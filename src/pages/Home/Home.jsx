import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const userName = useSelector(state => state.user.user.name);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <Box
      style={{
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 800,
        color: '#19d219',
      }}
    >
      {isLoggedIn ? (
        <Typography
          style={{
            textAlign: 'center',
            marginBottom: 20,
            fontWeight: 500,
            color: '#19d219',
          }}
          variant="h1"
          component="h1"
        >
          Welcome {userName}
        </Typography>
      ) : (
        <Typography
          style={{ textAlign: 'center', marginBottom: 25 }}
          component="p"
          variant="h3"
        >
          Create or sign in an account
        </Typography>
      )}

      <Typography style={{ textAlign: 'center' }} component="p" variant="h6">
        Super cool application for creating and storing contacts. It won't be
        better.
      </Typography>
    </Box>
  );
};

export default Home;
