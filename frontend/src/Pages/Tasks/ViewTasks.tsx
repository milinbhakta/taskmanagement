import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import axiosInstance from '../../Utils/AxiosInstance';
import { Task } from '../../Utils/Types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

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
    <Container maxWidth="xl">
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {tasks.map((task, index) => (
            <div key={task.task_id}>
              <ListItem>
                <ListItemText
                  primary={task.task_name}
                  secondary={task.description}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    sx={{ mr: 1 }}
                    edge="end"
                    component={Link}
                    to={`/tasks/${task.task_id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              {index < tasks.length - 1 && <Divider />}{' '}
            </div>
          ))}
        </List>
      )}
    </Container>
  );
}
