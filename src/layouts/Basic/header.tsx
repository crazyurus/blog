import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

interface Props {
  title: string;
}

function Header(props: Props): JSX.Element {
  const { title } = props;

  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.navbar}>
        <Link href="/">/home</Link>
        <Link href="/blogs">/blogs</Link>
        <Link href="/repositories">/repositories</Link>
        <Link href="/about">/about</Link>
      </div>
    </header>
  );
}

export default Header;
