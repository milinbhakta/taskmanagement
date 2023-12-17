import {
  Menu,
  Container,
  Image,
  Label,
  Dropdown,
  Icon,
} from 'semantic-ui-react';
import { useKeycloak } from '../Utils/AuthContext';

export default function Header() {
  const { userProfile } = useKeycloak();
  console.log('====================================');
  console.log('userProfile:', userProfile);
  console.log('====================================');
  return (
    <Menu inverted size="huge">
      <Container>
        <Menu.Item>
          <img
            src="/taskmanagement/taskmanagement.svg"
            alt="logo"
            style={{ marginRight: '1.5em' }}
          />
          Task Management
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item color="teal">
            <Icon name="user" />
            {userProfile?.username}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
