import { List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';
import useSWR from 'swr';

import type { Repository } from '../types';
import { get } from '../utils/request';

interface Response {
  data: {
    repositories: Repository[];
  };
}

function Repository(): JSX.Element {
  const { data } = useSWR<Response>('/api/repositories', get);
  const repositories = data ? data.data.repositories : [];

  return (
    <Page name="repositories">
      <Navbar title="GitHub 仓库" large backLink="首页" />
      <List mediaList dividers strong>
        {repositories.map(item => (
          <ListItem
            key={item.id}
            link={item.url}
            external
            title={item.name}
            subtitle={`${item.time.year}-${item.time.date}`}
            text={item.description}
          />
        ))}
      </List>
    </Page>
  );
}

export default Repository;
