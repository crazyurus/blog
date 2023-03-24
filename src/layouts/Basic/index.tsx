import React, { type PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';
import styles from './index.module.scss';

interface Props {
  title: string;
}

function Layout(props: PropsWithChildren<Props>): JSX.Element {
  const { title, children } = props;

  return (
    <div className={styles.layout}>
      <Header title={title} />
      <main className={styles.content} contentEditable>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
