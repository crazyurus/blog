import { List, ListItem, Navbar, Page } from 'framework7-react';
import React from 'react';
import useSWR from 'swr';

import type { Blog } from '../../types';
import { get } from '../../utils/request';

interface Response {
  data: {
    blogs: Blog[];
  };
}

function Blog(): JSX.Element {
  const { data } = useSWR<Response>('/api/blogs', get);
  const blogs = data ? data.data.blogs : [];

  return (
    <Page name="blogs">
      <Navbar title="博客" large backLink="首页" />
      <List mediaList dividers strong>
        {blogs.map(item => (
          <ListItem
            key={item.id}
            link={`/blogs/${item.id}`}
            title={item.title}
            subtitle={`${item.time.year}-${item.time.date}`}
            text={item.description}
          />
        ))}
      </List>
    </Page>
  );
}

export default Blog;
