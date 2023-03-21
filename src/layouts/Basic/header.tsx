import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './header.module.scss';

interface Props {
  title: string;
}

function Header(props: Props): JSX.Element {
  const { title } = props;

  return (
    <header className={styles.header}>
      <div className={classNames(styles.title, 'flex-grow', 'text-ellipsis', 'whitespace-nowrap', 'overflow-hidden')}>
        {title}
      </div>
      <div className={classNames(styles.navbar, 'flex-shrink-0')}>
        <Link href="/">/home</Link>
        <Link href="/blogs">/blogs</Link>
        <Link href="/repositories">/repositories</Link>
        <Link href="/about">/about</Link>
      </div>
    </header>
  );
}

export default Header;
