import { BlockHeader, List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';
import useSWR from 'swr';

import type { Bot } from '../types';
import { get } from '../utils/request';

interface Response {
  data: {
    bots: Bot[];
  };
}

function Bot(): JSX.Element {
  const { data } = useSWR<Response>('/api/bots', get);
  const bots = data ? data.data.bots : [];

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
