import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../mobile'), {
  ssr: false
});
function Mobile(): JSX.Element {
  return <Layout />;
}

Mobile.getLayout = (page: JSX.Element) => page;

export default Mobile;
