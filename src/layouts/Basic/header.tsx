import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

function Header(): JSX.Element {
  const neteaseMusicPlaylistID = process.env.NEXT_PUBLIC_NETEASE_MUSIC_PLAYLIST_ID;
  const TMDBAccountID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;

  return (
    <header className={styles.header}>
      <div className={classNames(styles.title, 'flex-grow', 'text-ellipsis', 'whitespace-nowrap', 'overflow-hidden')}>
        <span className="font-tech text-2xl text-green tracking-tighter group-hover:animate-pulse hidden sm:block">
          CR4ZY <span className="text-white">URU5</span>
        </span>
      </div>
      <div className={classNames(styles.navbar, 'flex-shrink-0')}>
        <Link href="/">/home</Link>
        <Link href="/blogs">/blogs</Link>
        <Link href="/car">/car</Link>
        <Link href="/repositories">/repositories</Link>
        <Link href="/agents">/agents</Link>
        {neteaseMusicPlaylistID && <Link href="/music">/music</Link>}
        {TMDBAccountID && <Link href="/movies">/movies</Link>}
        <Link href="/friends">/friends</Link>
      </div>
    </header>
  );
}

export default Header;
