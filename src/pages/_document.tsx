import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

function Document(): JSX.Element {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000" />
        <meta name="referrer" content="no-referrer"></meta>
        <link rel="icon" type="image/png" href="/avatar.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
