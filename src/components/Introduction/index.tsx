import Link from 'next/link';
import React, { Fragment } from 'react';

interface Props {
  divider?: JSX.Element;
}

function Introduction(props: Props): JSX.Element {
  const { divider = null } = props;

  return (
    <Fragment>
      <p>
        我是 <strong>Cr4zy Uru5</strong>，是一名「前端/全栈开发工程师」，毕业于「武汉理工大学」
      </p>
      {divider}
      <p>
        我对 <strong>React</strong>、<strong>小程序</strong>、<strong>Node.js</strong>、<strong>工程化</strong>、
        <strong>AI 大模型</strong> 和 <strong>Web 安全</strong> 等领域感兴趣
      </p>
      {divider}
      <p>这是我的个人主页，内容还在陆续建设中</p>
      {divider}
      <p>
        你可以点击「导航栏」的{' '}
        <strong>
          <Link href="/blogs">blogs</Link>
        </strong>{' '}
        查看我的技术文章，
        <strong>
          {' '}
          <Link href="/repositories">repositories</Link>
        </strong>{' '}
        查看我参与的开源项目
      </p>
      {divider}
      <p>
        你可以点击右下角「悬浮按钮」与<del>我</del>（Agent）对话
      </p>
      {divider}
      <p>
        你可以点击「底部链接」在 <strong>GitHub</strong>、<strong>掘金</strong>、<strong>微信公众号</strong> 和{' '}
        <strong>知乎</strong> 找到我
      </p>
      {divider}
      <p>
        你也可以通过电子邮件{' '}
        <a className="external" href="mailto:crazyurus@vip.qq.com">
          crazyurus@vip.qq.com
        </a>{' '}
        联系我
      </p>
    </Fragment>
  );
}

export default Introduction;
