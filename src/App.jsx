import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ListRoutes from './ListRoutes';
import { OidcProvider } from '@axa-fr/react-oidc';

const configuration = {
  client_id: "interactive.public.short",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
  authority: "https://demo.duendesoftware.com",
  service_worker_relative_url: "/OidcServiceWorker.js", // just comment that line to disable service worker mode
  service_worker_only: false,
  demonstrating_proof_of_possession: false, 
};

function App() {
  return (
    <OidcProvider configuration={configuration}>
      <Router>
        <ListRoutes />
      </Router>
    </OidcProvider>
  );
}

export default App;
