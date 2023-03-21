import React, { useEffect, Fragment } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Basic';
import { initBackground } from '../utils/background';
import '../styles/global.scss';
import '../styles/canvas.scss';

const defaultTitle = 'Crazy Urus';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element, props: P) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    title?: string;
  };
};

function getDefaultLayout(page: JSX.Element, pageProps: any): JSX.Element {
  const { title = defaultTitle } = pageProps;

  return <Layout title={title}>{page}</Layout>;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { title = defaultTitle } = pageProps;
  const getLayout = Component.getLayout ?? getDefaultLayout;

  useEffect(initBackground, []);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
      <canvas id="canvas" />
    </Fragment>
  );
}

export default App;
