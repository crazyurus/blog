import NextProgress from 'next-progress';
import React, { Fragment, useEffect, type PropsWithChildren } from 'react';

import colors from '../../../constants/colors';
import { initBackground } from '../../utils/background';
import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';

interface Props {
  title: string;
}

function Layout(props: PropsWithChildren<Props>): JSX.Element {
  const { title, children } = props;

  useEffect(initBackground, []);

  return (
    <Fragment>
      <NextProgress color={colors.green} />
      <div className={styles.layout}>
        <Header title={title} />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
      <canvas id="canvas" />
    </Fragment>
  );
}

export default Layout;
