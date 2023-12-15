import { Menu, Container, Button } from 'semantic-ui-react';

export default function Header() {
  return (
    <Menu inverted size="large">
      <Container>
        <Menu.Item>
          <img
            src="/taskmanagement.svg"
            alt="logo"
            style={{ marginRight: '1.5em' }}
          />
          Task Management
        </Menu.Item>
        <Menu.Item position="right">
          <Button as="a" inverted>
            Log in
          </Button>
          <Button as="a" inverted primary style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
