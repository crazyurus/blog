import { BlockFooter, List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';

import friends from '../../../constants/friends';

function Friend(): JSX.Element {
  return (
    <Page name="friends">
      <Navbar title="朋友" large />
      <List dividersIos strong>
        {friends.map(item => (
          <ListItem key={item.url} title={item.name} link={item.url} external />
        ))}
        <BlockFooter slot="after-list">
          想成为我的朋友出现在这里？
          <a className="external" href="https://wj.qq.com/s2/11991568/cfb8/" target="_blank" rel="noopener noreferrer">
            请戳这里填写问卷
          </a>
        </BlockFooter>
      </List>
    </Page>
  );
}

export default Friend;
