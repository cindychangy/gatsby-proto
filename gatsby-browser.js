import React from 'react';
import { EuiProvider } from '@elastic/eui';
import { Helmet } from 'react-helmet';
import '@elastic/eui/dist/eui_theme_light.css';
import favicon from './static/images/favicon/prod/favicon-16x16.png';

export const wrapPageElement = ({ element }) => {
  return (
    <EuiProvider colorMode="light">
      <>
        {' '}
        <Helmet>
          <title>Guided Onboarding Prototype</title>
          <link rel="icon" href={favicon} />
        </Helmet>{' '}
        {element}
      </>
    </EuiProvider>
  );
};
