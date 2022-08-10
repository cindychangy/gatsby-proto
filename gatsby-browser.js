import React from 'react';
import { EuiProvider } from '@elastic/eui';
import { Helmet } from 'react-helmet';
import '@elastic/eui/dist/eui_theme_light.css';

export const wrapPageElement = ({ element }) => {
  return (
    <EuiProvider colorMode="light">
      <>
        {' '}
        <Helmet>
          <title>Guided Onboarding Prototype</title>
        </Helmet>{' '}
        {element}
      </>
    </EuiProvider>
  );
};
