import { BlockHeader, List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';

import bots from '../../constants/bots';

function Bot(): JSX.Element {
  return (
    <Page name="bots">
      <Navbar title="机器人" large backLink="首页" />
      <List dividers strong>
        <BlockHeader>
          以下 Bot 可在{' '}
          <a className="external" href="https://www.doubao.com/" target="_blank" rel="noopener noreferrer">
            豆包
          </a>{' '}
          中打开：
        </BlockHeader>
        {bots.map(item => (
          <ListItem key={item.id} title={item.name} link={`https://www.doubao.com/share?botId=${item.id}`} external />
        ))}
      </List>
    </Page>
  );
}

export default Bot;
