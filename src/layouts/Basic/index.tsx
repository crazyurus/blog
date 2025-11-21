import NextProgress from 'next-progress';
import { useMemo, type PropsWithChildren } from 'react';

import MatrixRain from '@/components/home/MatrixRain';

import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';

function Layout(props: PropsWithChildren<unknown>): JSX.Element {
  const { children } = props;
  const colorGreen = useMemo(() => {
    if (typeof getComputedStyle === 'function') {
      const styles = getComputedStyle(document.documentElement);

      return styles.getPropertyValue('--color-green');
    }

    return '#00ff41';
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-black selection:bg-green selection:text-black">
      <NextProgress color={colorGreen} />
      <MatrixRain />
      <div className={styles.scanlines}></div>
      <div className={styles.flicker}></div>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow px-20 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
