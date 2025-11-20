import { Github } from 'lucide-react';
import React from 'react';

import { Link } from '../../components';
import styles from './footer.module.scss';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const GitHubUserName = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const JuejinUserID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const ZhihuUserName = process.env.NEXT_PUBLIC_ZHIHU_USERNAME;
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
  const beian = process.env.NEXT_PUBLIC_MIIT_BEIAN;

  return (
    <footer className={styles.footer}>
      <div>
        <div>
          &copy; {year} {defaultTitle}. Designed by Gemini 3 Pro
        </div>
        <div className="mt-1">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            {beian}
          </a>
        </div>
      </div>
      <div className={styles.contact}>
        <Link url={`https://github.com/${GitHubUserName}`} title="GitHub" icon={<Github size={18} />} />
        <Link url={`https://juejin.cn/user/${JuejinUserID}`} title="Juejin" />
        <Link url="https://mp.weixin.qq.com/s/uXGX7jaTs7ULjgWnET3nEg" title="WeChat" />
        <Link url={`https://www.zhihu.com/people/${ZhihuUserName}`} title="Zhihu" />
      </div>
    </footer>
  );
}

export default Footer;
