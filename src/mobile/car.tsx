import { List, ListItem, Navbar, Page } from 'framework7-react';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';

import type { CarBlog } from '../types';
import { get } from '../utils/request';

interface Response {
  data: {
    car: CarBlog[];
  };
}

function CarBlogs(): JSX.Element {
  const { data } = useSWR<Response>('/api/car', get);
  const blogs = data ? data.data.car : [];

  return (
    <Page name="car">
      <Navbar title="比亚迪用车经验" large backLink="首页" />
      <List mediaList dividers strong>
        {blogs.map(item => (
          <ListItem
            key={item.id}
            link={item.url}
            external
            title={item.title}
            subtitle={item.time}
            text={item.type === 'image' ? '图文' : '文章'}>
            <Image alt={item.title} slot="media" style={{ borderRadius: 8 }} src={item.image} width={80} height={80} />
          </ListItem>
        ))}
      </List>
    </Page>
  );
}

export default CarBlogs;
