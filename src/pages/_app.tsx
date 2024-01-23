import type { NextPage } from 'next';
import NextProgress from 'next-progress';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';

import colors from '../../constants/colors';
import Layout from '../layouts/Basic';
import { initBackground } from '../utils/background';

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
      </Head>
      <NextProgress color={colors.green} />
      {getLayout(<Component {...pageProps} />, pageProps)}
      <canvas id="canvas" />
    </Fragment>
  );
}

export default App;
