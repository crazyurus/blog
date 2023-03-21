import React from 'react';
import { Link } from '../../components';
import styles from './footer.module.scss';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>&copy; {year} Crazy Urus</div>
      <div className={styles.contact}>
        <Link url="https://github.com/crazyurus" content="GitHub" />
        <Link url="https://juejin.cn/user/3438928100072813" content="掘金" />
        <Link url="https://www.zhihu.com/people/crazyurus" content="知乎" />
      </div>
    </footer>
  );
}

export default Footer;
