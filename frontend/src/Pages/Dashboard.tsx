import { Container, Header } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axiosInstance from '../Utils/AxiosInstance';

const Dashboard = () => {
  const [emojis, SetEmojis] = useState([]);

  useEffect(() => {
    axiosInstance.get('/emojis').then((res) => {
      console.log(res);
      SetEmojis(res.data);
    });
  }, []);

  const content = (
    <Container>
      <Header as="h1">Dashboard</Header>
      <p>Welcome to DashBoard</p>
      {emojis.map((emoji, i) => (
        <p key={i}>{emoji}</p>
      ))}
    </Container>
  );
  return content;
};
export default Dashboard;
