import { Button, Container, Icon, List, Loader } from 'semantic-ui-react';
import axiosInstance from '../../Utils/AxiosInstance';
import { useEffect, useState } from 'react';
import { Task } from '../../Utils/Types';
import { Link } from 'react-router-dom';

export default function ViewTasks() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axiosInstance.get('/tasks').then((res) => {
      setTasks(res.data);
      setTimeout(() => {
        console.log(res);
        setLoading(false);
      }, 1000);
    });
  }, []);
  return (
    <Container>
      {loading ? (
        <Loader active inline indeterminate>
          getting your tasks
        </Loader>
      ) : (
        <List divided className="middle" animated size="big">
          {tasks.map((task) => (
            <List.Item key={task.task_id}>
              <List.Content floated="right">
                <Button.Group icon size="large">
                  <Link to={`/tasks/${task.task_id}`}>
                    <Button>
                      <Icon name="edit" color="grey" />
                    </Button>
                  </Link>
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
}
