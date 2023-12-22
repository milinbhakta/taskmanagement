import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Task } from '../../Utils/Types';
import axiosInstance from '../../Utils/AxiosInstance';
import { useMessage } from '../../hooks/MessageContext';

export default function EditTask() {
  const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const { showMessage } = useMessage();

  useEffect(() => {
    axiosInstance(`/tasks/${taskId}`)
      .then((res: any) => {
        setTask(res.data[0]);
      })
      .catch((error) => console.error(error));
  }, [taskId]);

  if (!task) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.put(`/tasks/${taskId}`, {
        ...task,
      });

      if (response.status === 200) {
        showMessage('Task updated successfully', 'success');
      } else {
        showMessage('Error updating task', 'error');
      }
    } catch (error) {
      console.error(error);
      showMessage('Error updating task', 'error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Name"
          name="task_name"
          placeholder="Task Name"
          value={task.task_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          multiline
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          name="status"
          placeholder="Status"
          value={task.status_id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="deadline"
          label="Deadline"
          type="date"
          value={task.deadline}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
