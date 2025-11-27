import { List, ListItem, Navbar, Page } from 'framework7-react';
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
      <Navbar title="GitHub 仓库" large backLink />
      <List mediaList dividers strong>
        {repositories.map(item => (
          <ListItem
            key={item.id}
            link={item.url}
            external
            title={item.name}
            subtitle={item.time}
            text={item.description}
          />
        ))}
      </List>
    </Page>
  );
}

export default Repository;
