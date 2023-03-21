import React from 'react';
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
        <div>/home</div>
        <div>/blogs</div>
        <div>/repositories</div>
        <div>/about</div>
      </div>
    </header>
  );
}

export default Header;
