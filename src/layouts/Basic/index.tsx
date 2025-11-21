import classNames from 'classnames';
import NextProgress from 'next-progress';
import React, { Fragment, useEffect, useMemo, type PropsWithChildren } from 'react';

import { initBackground } from '../../utils/init';
import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';

function Layout(props: PropsWithChildren<unknown>): JSX.Element {
  const { children } = props;
  const empty = !process.env.NEXT_PUBLIC_MIIT_BEIAN;
  const colorGreen = useMemo(() => {
    if (typeof getComputedStyle === 'function') {
      const styles = getComputedStyle(document.documentElement);

      return styles.getPropertyValue('--color-green');
    }

    return '#00ff41';
  }, []);

  useEffect(() => initBackground(colorGreen), [colorGreen]);

  return (
    <Fragment>
      <NextProgress color={colorGreen} />
      <div className={styles.scanlines}></div>
      <div className={styles.flicker}></div>
      <div className={styles.layout}>
        <Header />
        <main
          className={classNames(styles.content, {
            [styles.empty]: empty
          })}>
          {children}
        </main>
        <Footer />
      </div>
      <canvas id="canvas" />
    </Fragment>
  );
}

export default Layout;
