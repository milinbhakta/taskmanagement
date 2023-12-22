import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const content = (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="h6">
        Welcome to Dashboard! {new Date().toString()}
      </Typography>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Link
          to="/tasks"
          style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
        >
          &#8226; View Tasks
        </Link>
        <Link
          to="/tasks/create"
          style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
        >
          &#8226; Create Task
        </Link>
      </Stack>
    </Container>
  );
  return content;
};
export default Dashboard;
