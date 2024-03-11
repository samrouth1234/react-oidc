import React from 'react';
import Layout from '../Layout/Layout';
import { OidcSecure } from '@axa-fr/react-oidc';

function Admin() {
  return (
    <OidcSecure>
      <Layout>
        <div>Admin</div>
      </Layout>
    </OidcSecure>
  );
}

export default Admin;
