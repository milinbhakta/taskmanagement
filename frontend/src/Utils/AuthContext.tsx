import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import Keycloak, { KeycloakProfile } from 'keycloak-js';
import LoadingPage from '../Pages/LoadingPage';

interface KeycloakContextProps {
  keycloak: Keycloak | null;
  userProfile: KeycloakProfile | null;
}

const KeycloakContext = createContext<KeycloakContextProps | null>(null);

export const useKeycloak = (): KeycloakContextProps => {
  const context = useContext(KeycloakContext);

  if (context === null) {
    throw new Error('useKeycloak must be used within a KeycloakProvider');
  }

  return context;
};

const keycloakInstance = new Keycloak({
  clientId: 'Task-Management',
  realm: 'Task-Management',
  url: 'http://localhost/auth',
});

const useKeycloakState = (): [
  boolean,
  Keycloak | null,
  KeycloakProfile | null,
] => {
  const [isLoading, setIsLoading] = useState(true);
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [userProfile, setUserProfile] = useState<KeycloakProfile | null>(null);

  useEffect(() => {
    keycloakInstance
      .init({
        onLoad: 'login-required',
        scope: 'openid profile email',
        redirectUri: 'http://localhost/taskmanagement/',
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        if (authenticated) {
          keycloakInstance.loadUserProfile().then((profile) => {
            setKeycloak(keycloakInstance);
            setIsLoading(false);
            setUserProfile(profile);
            console.log('User Profile:', profile);
          });
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Keycloak initialization error:', error);
        setIsLoading(false);
      });
  }, []);

  return [isLoading, keycloak, userProfile];
};

const KeycloakProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isLoading, keycloak, userProfile] = useKeycloakState();

  useEffect(() => {
    if (keycloak) {
      keycloak.onTokenExpired = () => {
        keycloak
          .updateToken()
          .then((refreshed) => {
            if (refreshed) {
              console.log('Token refreshed');
            } else {
              console.log(
                'Token not refreshed, valid for: ',
                keycloak.tokenParsed?.exp + ' seconds'
              );
            }
          })
          .catch((error) => {
            console.error('Token refresh error:', error);
          });
      };
    }
  }, [keycloak]);

  return (
    <KeycloakContext.Provider value={{ keycloak, userProfile }}>
      {!isLoading ? children : <LoadingPage />}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
export { KeycloakContext };
