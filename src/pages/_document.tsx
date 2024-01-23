import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function Document(): JSX.Element {
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000" />
        <meta name="referrer" content="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/png" href="/avatar.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title={`${defaultTitle} blogs`} href="/rss.xml" />
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
