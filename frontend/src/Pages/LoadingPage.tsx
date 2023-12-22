import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress size="large" />
    </Box>
  );
};

export default LoadingPage;
