import React from 'react';
import TypeIt from 'typeit-react';
import logo from './logo.txt';
import styles from './index.module.scss';

function Home(): JSX.Element {
  return (
    <div>
      <pre className={styles.logo}>{logo}</pre>
      <TypeIt
        element="div"
        className={styles.content}
        options={{
          speed: 36,
          waitUntilVisible: true,
          cursorChar: '_'
        }}
      >
        <p>
          我是 <strong>Crazy Urus</strong>，毕业于「武汉理工大学」，现就职于「字节跳动」，坐标「武汉」
        </p>
        <br />
        <p>
          我对 <strong>React</strong>、<strong>小程序</strong>、<strong>低代码平台</strong>、<strong>开发工具链</strong>
          、<strong>AIGC</strong> 和 <strong>Web 安全</strong> 等领域感兴趣
        </p>
        <br />
        <p>这是我的个人主页，内容还在陆续建设中</p>
        <br />
        <p>
          你可以点击「导航栏」的 <strong>blogs</strong> 查看我的技术文章，<strong>repositories</strong>{' '}
          查看我参与的开源项目
        </p>
        <br />
        <p>
          你可以点击「底部链接」在 <strong>GitHub</strong>、<strong>掘金</strong> 和 <strong>知乎</strong> 找到我
        </p>
        <br />
        <p>
          你也可以通过电子邮件 <a href="mailto:crazyurus@vip.qq.com">crazyurus@vip.qq.com</a> 联系我
        </p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p className="italic">
          这个项目基于 Next.js 开发，代码仓库在这里{' '}
          <a href="https://github.com/crazyurus/blog" target="_blank" rel="noopener noreferrer">
            crazyurus/blog
          </a>
        </p>
      </TypeIt>
    </div>
  );
}

export default Home;
