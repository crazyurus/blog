import React from 'react';
import { Link } from '../../components';
import styles from './footer.module.scss';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const GitHubUserName = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const JuejinUserID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const ZhihuUserName = process.env.NEXT_PUBLIC_ZHIHU_USERNAME;
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  return (
    <footer className={styles.footer}>
      <div>
        &copy; {year} {defaultTitle}
      </div>
      <div className={styles.contact}>
        <Link url={`https://github.com/${GitHubUserName}`} content="GitHub" />
        <Link url={`https://juejin.cn/user/${JuejinUserID}`} content="掘金" />
        {ZhihuUserName && <Link url={`https://www.zhihu.com/people/${ZhihuUserName}`} content="知乎" />}
      </div>
    </footer>
  );
}

export default Footer;
