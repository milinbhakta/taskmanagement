import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Dashboard = () => {
  const content = (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="h6">
        Welcome to Dashboard! {new Date().toString()}
      </Typography>
      {/* Link to view Tasks */}
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h6">
                <Link to="/tasks">View your tasks</Link>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
  return content;
};
export default Dashboard;
