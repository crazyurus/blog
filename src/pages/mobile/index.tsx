import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('../../mobile'), {
  ssr: false
});
function Mobile(): JSX.Element {
  return <Layout />;
}

Mobile.getLayout = (page: JSX.Element) => page;

export default Mobile;
