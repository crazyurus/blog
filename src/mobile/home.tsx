import classNames from 'classnames';
import { Block, BlockTitle, Icon, List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';

import { Introduction } from '../components';
import styles from './index.module.scss';

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
      <BlockTitle medium>导航</BlockTitle>
      <List className={styles.list} mediaList dividers strong inset>
        <ListItem title="博客">
          <Icon icon={classNames(styles.icon, styles.green)} slot="media" f7="doc_text_fill" />
        </ListItem>
        <ListItem title="仓库">
          <Icon icon={classNames(styles.icon, styles.blue)} slot="media" f7="square_stack_3d_up_fill" />
        </ListItem>
        <ListItem title="机器人" link="/bots">
          <Icon icon={classNames(styles.icon, styles.purple)} slot="media" f7="ellipses_bubble_fill" />
        </ListItem>
        <ListItem title="音乐">
          <Icon icon={classNames(styles.icon, styles.orange)} slot="media" f7="music_note_2" />
        </ListItem>
        <ListItem title="朋友" link="/friends">
          <Icon icon={classNames(styles.icon, styles.yellow)} slot="media" f7="link_circle_fill" />
        </ListItem>
      </List>
      <BlockTitle medium>联系我</BlockTitle>
      <List className={styles.list} mediaList dividers strong inset>
        <ListItem title="GitHub" link={`https://github.com/${GitHubUserName}`} external>
          <Icon icon={classNames(styles.icon, styles.black)} slot="media" f7="logo_github" />
        </ListItem>
        <ListItem title="掘金" link={`https://juejin.cn/user/${JuejinUserID}`} external>
          <Icon icon={classNames(styles.icon, styles.gray)} slot="media" f7="paperplane_fill" />
        </ListItem>
        <ListItem title="知乎" link={`https://www.zhihu.com/people/${ZhihuUserName}`} external>
          <Icon icon={classNames(styles.icon, styles.gray)} slot="media" f7="number_circle_fill" />
        </ListItem>
      </List>
    </Page>
  );
}

export default Home;
