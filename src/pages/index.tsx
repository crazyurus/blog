import React from 'react';
import logo from './logo.txt';
import styles from './index.module.scss';

function Home(): JSX.Element {
  return (
    <div>
      <pre className={styles.logo}>{logo}</pre>
      <div className={styles.content}>
        <p>
          我是 <strong>Crazy Urus</strong>，毕业于「武汉理工大学」，现就职于「字节跳动」飞书团队，坐标「武汉」
        </p>
        <p>
          我对 <strong>React</strong>、<strong>小程序</strong>、<strong>低代码平台</strong>、<strong>开发工具链</strong>{' '}
          和 <strong>Web 安全</strong> 等领域感兴趣
        </p>
        <p>这是我的个人主页，内容还在建设中</p>
        <p>
          你可以点击「导航栏」的 <strong>blogs</strong> 查看我的技术文章，<strong>repositories</strong>{' '}
          查看我参与的开源项目
        </p>
        <p>
          你可以点击「底部链接」在 <strong>GitHub</strong>、<strong>掘金</strong> 和 <strong>知乎</strong> 找到我
        </p>
      </div>
    </div>
  );
}

export default Home;
