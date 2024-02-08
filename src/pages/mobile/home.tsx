import { Block, BlockTitle, List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';

import { Introduction } from '../../components';

function Home(): JSX.Element {
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
  const GitHubUserName = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const JuejinUserID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const ZhihuUserName = process.env.NEXT_PUBLIC_ZHIHU_USERNAME;

  return (
    <Page name="home">
      <Navbar title={defaultTitle} large />
      <Block>
        <Introduction />
      </Block>
      <BlockTitle>导航</BlockTitle>
      <List dividersIos strong inset>
        <ListItem title="博客" />
        <ListItem title="仓库" />
        <ListItem title="机器人" link="/bots" />
        <ListItem title="音乐" />
        <ListItem title="朋友" link="/friends" />
      </List>
      <BlockTitle>联系我</BlockTitle>
      <List dividersIos strong inset>
        <ListItem title="GitHub" link={`https://github.com/${GitHubUserName}`} external />
        <ListItem title="掘金" link={`https://juejin.cn/user/${JuejinUserID}`} external />
        <ListItem title="知乎" link={`https://www.zhihu.com/people/${ZhihuUserName}`} external />
      </List>
    </Page>
  );
}

export default Home;
