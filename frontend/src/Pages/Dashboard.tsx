import { Link } from 'react-router-dom';
import { Container, Header, List } from 'semantic-ui-react';

const Dashboard = () => {
  const content = (
    <Container>
      <Header as="h1">Dashboard</Header>
      <Header as="h4">Welcome to Dashboard! {new Date().toString()}</Header>
      {/* Link to view Tasks */}
      <List bulleted>
        <List.Item as="h3">
          <Link to="/tasks">View your tasks</Link>
        </List.Item>
      </List>
    </Container>
  );
  return content;
};
export default Dashboard;
