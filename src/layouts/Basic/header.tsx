import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.title, 'flex-grow', 'text-ellipsis', 'whitespace-nowrap', 'overflow-hidden')}>
        <span className="font-tech text-2xl tracking-tighter group-hover:animate-pulse hidden sm:block">
          <span className="text-green">CR</span>4<span className="text-green">ZY</span> URU
          <span className="text-green">5</span>
        </span>
      </div>
      <div className={classNames(styles.navbar, 'flex-shrink-0')}>
        <Link href="/">/home</Link>
        <Link href="/blogs">/blogs</Link>
        <Link href="/car">/car</Link>
        <Link href="/repositories">/repositories</Link>
        <Link href="/agents">/agents</Link>
        <Link href="/music">/music</Link>
        <Link href="/movies">/movies</Link>
        <Link href="/friends">/friends</Link>
        <Link href="/whoami">/whoami</Link>
      </div>
    </header>
  );
}

export default Header;
