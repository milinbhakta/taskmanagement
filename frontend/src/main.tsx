import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeycloakProvider from './hooks/KeycloakContext.tsx';
import { MessageProvider } from './hooks/MessageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <KeycloakProvider>
    <MessageProvider>
      <BrowserRouter basename="/taskmanagement">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  </KeycloakProvider>
);
