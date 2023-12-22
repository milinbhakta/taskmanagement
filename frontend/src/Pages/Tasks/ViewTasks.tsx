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
import Typography from '@mui/material/Typography';

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
            <ListItem divider key={task.task_id}>
              <ListItemText
                primary={task.task_name}
                secondary={task.description}
              />
              <ListItemSecondaryAction
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  Created On: {''}
                  {new Date(task.created_on).toLocaleDateString('en-CA')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Deadline: {task.deadline}
                </Typography>
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
          ))}
        </List>
      )}
    </Container>
  );
}
