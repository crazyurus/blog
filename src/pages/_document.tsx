import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function Document(): JSX.Element {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000" />
        <meta name="referrer" content="no-referrer"></meta>
        <link rel="icon" type="image/png" href="/avatar.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
}

export default Document;
