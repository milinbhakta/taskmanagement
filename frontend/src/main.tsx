import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeycloakProvider from './Utils/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <KeycloakProvider>
    <React.StrictMode>
      <BrowserRouter basename="/taskmanagement">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </KeycloakProvider>
);
