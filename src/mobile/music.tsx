import { List, ListItem, Navbar, Page } from 'framework7-react';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';

import type { Music } from '../types';
import { get } from '../utils/request';

interface Response {
  data: {
    music: Music[];
  };
}

function Music(): JSX.Element {
  const { data } = useSWR<Response>('/api/music', get);
  const music = data ? data.data.music : [];

  return (
    <Page name="music">
      <Navbar title="喜欢的音乐" large backLink="首页" />
      <List mediaList dividers strong>
        {music.map(item => (
          <ListItem
            key={item.id}
            link={`https://y.music.163.com/m/song?id=${item.id}`}
            external
            title={item.name}
            subtitle={item.author.join('、')}
            text={item.duration}>
            <Image alt={item.name} slot="media" style={{ borderRadius: 8 }} src={item.image} width={80} height={80} />
          </ListItem>
        ))}
      </List>
    </Page>
  );
}

export default Music;
