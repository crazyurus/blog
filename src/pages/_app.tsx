import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { Fragment } from 'react';

import Layout from '../layouts/Basic';

import '../styles/global.scss';
import '../styles/canvas.scss';
import '../styles/prism.scss';

const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element, props: P) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    title?: string;
  };
};

function getDefaultLayout(page: JSX.Element): JSX.Element {
  return <Layout>{page}</Layout>;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { title = defaultTitle } = pageProps;
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </Fragment>
  );
}

export default App;
