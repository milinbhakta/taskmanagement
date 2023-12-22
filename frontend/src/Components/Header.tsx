import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useKeycloak } from '../hooks/KeycloakContext';
import {
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

export default function Header() {
  const { userProfile, keycloak } = useKeycloak();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting: string) => {
    switch (setting) {
      case 'Logout':
        keycloak?.logout();
        break;
      case 'Profile':
        console.log('====================================');
        console.log('Profile');
        console.log('====================================');
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const settings = ['Profile', 'Logout'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" noWrap>
            Task Management
          </Typography>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  alt={userProfile?.username}
                  src={`https://robohash.org/${userProfile?.username}`}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
