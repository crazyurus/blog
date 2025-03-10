import classNames from 'classnames';
import NextProgress from 'next-progress';
import Script from 'next/script';
import React, { Fragment, useEffect, type PropsWithChildren } from 'react';

import colors from '../../../constants/colors';
import { initBackground, initCoze } from '../../utils/init';
import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';

interface Props {
  title: string;
}

function Layout(props: PropsWithChildren<Props>): JSX.Element {
  const { title, children } = props;
  const empty = !process.env.NEXT_PUBLIC_MIIT_BEIAN;

  useEffect(initBackground, []);

  return (
    <Fragment>
      <NextProgress color={colors.green} />
      <Script
        src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/cn/index.js"
        onLoad={initCoze}
      />
      <div className={styles.layout}>
        <Header title={title} />
        <main
          className={classNames(styles.content, {
            [styles.empty]: empty
          })}>
          {children}
        </main>
        <div className={styles.float} id="coze" title="与我对话" />
        <Footer />
      </div>
      <canvas id="canvas" />
    </Fragment>
  );
}

export default Layout;
