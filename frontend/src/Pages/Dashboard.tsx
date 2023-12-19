import {
  Button,
  Container,
  Header,
  Icon,
  List,
  Loader,
} from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axiosInstance from '../Utils/AxiosInstance';

type Task = {
  task_id: number;
  task_name: string;
  description: string;
  assigned_to: string;
  status_id: number;
  deadline: string;
  created_on: string;
  last_update: string;
};

const Dashboard = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axiosInstance.get('/tasks').then((res) => {
      setTasks(res.data);
      setTimeout(() => {
        console.log(res);
        setLoading(false);
      }, 3000);
    });
  }, []);

  const content = (
    <Container>
      <Header as="h1">Dashboard</Header>
      <p>Welcome to DashBoard</p>
      {loading ? (
        <Loader active inline indeterminate>
          getting your tasks
        </Loader>
      ) : (
        <List divided className="middle verticle" animated size="big">
          {tasks.map((task) => (
            <List.Item key={task.task_id}>
              <List.Content floated="right">
                <Button.Group icon size="large">
                  <Button>
                    <Icon name="edit" />
                  </Button>
                  <Button>
                    <Icon name="trash" color="grey" />
                  </Button>
                </Button.Group>
              </List.Content>
              <List.Header>{task.task_name}</List.Header>
              <List.Content>{task.description}</List.Content>
            </List.Item>
          ))}
        </List>
      )}
    </Container>
  );
  return content;
};
export default Dashboard;
