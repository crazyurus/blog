import Framework7 from 'framework7';
import Framework7React, { App, View } from 'framework7-react';
import React from 'react';

import 'framework7-icons';
import 'framework7/css/bundle';

const routes = [
  {
    path: '/',
    asyncComponent: () => import('./home')
  },
  {
    path: '/blogs/:id',
    asyncComponent: () => import('./blogs/[id]')
  },
  {
    path: '/blogs',
    asyncComponent: () => import('./blogs/index')
  },
  {
    path: '/repositories',
    asyncComponent: () => import('./repository')
  },
  {
    path: '/agents',
    asyncComponent: () => import('./bot')
  },
  {
    path: '/music',
    asyncComponent: () => import('./music')
  },
  {
    path: '/movies/:id',
    asyncComponent: () => import('./movies/[id]')
  },
  {
    path: '/movies',
    asyncComponent: () => import('./movies/index')
  },
  {
    path: '/car',
    asyncComponent: () => import('./car')
  },
  {
    path: '/friends',
    asyncComponent: () => import('./friend')
  }
];

Framework7.use(Framework7React);

function Mobile(): JSX.Element {
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  return (
    <App name={defaultTitle} theme="auto" darkMode>
      <View url="/" main browserHistory routes={routes} browserHistorySeparator="" />
    </App>
  );
}

export default Mobile;
