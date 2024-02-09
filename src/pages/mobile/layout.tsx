import Framework7 from 'framework7';
import Framework7React, { App, View } from 'framework7-react';
import React from 'react';

import 'framework7/css/bundle';

const routes = [
  {
    path: '/',
    asyncComponent: () => import('./home')
  },
  {
    path: '/bots',
    asyncComponent: () => import('./bot')
  },
  {
    path: '/friends',
    asyncComponent: () => import('./friend')
  }
];

Framework7.use(Framework7React);

function Layout(): JSX.Element {
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  return (
    <App name={defaultTitle} theme="auto" darkMode>
      <View url="/" main browserHistory routes={routes} browserHistorySeparator="" />
    </App>
  );
}

export default Layout;
