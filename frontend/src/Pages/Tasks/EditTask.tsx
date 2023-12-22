import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Loader, TextArea } from 'semantic-ui-react';
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
    return <Loader active>Loading...</Loader>;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.put(`/tasks/${taskId}`, {
        ...task,
      });

      if (response.status === 200) {
        // Handle successful update here, e.g. redirect to task list
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
    e: React.ChangeEvent<HTMLInputElement>,
    { name, value }: { name: string; value: string }
  ) => setTask({ ...task, [name]: value });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          control={Form.Input}
          label="Task Name"
          name="task_name"
          placeholder="Task Name"
          value={task.task_name}
          onChange={handleChange}
        />
        <Form.Field
          control={TextArea}
          label="Description"
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
        />
        <Form.Field
          control={Form.Input}
          label="Status"
          name="status"
          placeholder="Status"
          value={task.status_id}
          onChange={handleChange}
        />
        <Form.Field
          control={Form.Input}
          name="deadline"
          label="Deadline"
          type="date"
          value={task.deadline}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
