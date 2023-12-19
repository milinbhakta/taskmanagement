import { Dropdown, Menu, Image, Container } from 'semantic-ui-react';
import { useKeycloak } from '../Utils/AuthContext';

export default function Header() {
  const { userProfile, keycloak } = useKeycloak();

  const trigger = (
    <span style={{ marginRight: '1rem' }}>
      <Image avatar src={`https://robohash.org/${userProfile?.username}`} />{' '}
      {userProfile?.username}
    </span>
  );

  const options = [
    { key: 'user', text: 'Account', icon: 'user', value: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings', value: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 'sign-out' },
  ];

  const handleDropdownChange = (e: any, data: any) => {
    switch (data.value) {
      case 'sign-out':
        keycloak?.logout();
        break;
      case 'user':
        console.log('====================================');
        console.log('user');
        console.log('====================================');
        // window.location.href = '/account';
        break;
      case 'settings':
        console.log('====================================');
        console.log('settings');
        console.log('====================================');
        // window.location.href = '/settings';
        break;
      default:
        break;
    }
  };

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
          <Menu.Item color="grey" className="margin-right">
            <Dropdown
              trigger={trigger}
              options={options}
              pointing="top right"
              icon={null}
              onChange={handleDropdownChange}
            />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
