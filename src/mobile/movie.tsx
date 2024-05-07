import { List, ListItem, Navbar, Page } from 'framework7-react';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';

import type { Movie } from '../types';
import { get } from '../utils/request';

interface Response {
  data: {
    movie: Movie[];
  };
}

function Movie(): JSX.Element {
  const { data } = useSWR<Response>('/api/movie', get);
  const movie = data ? data.data.movie : [];

  return (
    <Page name="movie">
      <Navbar title="喜欢的电影" large backLink="首页" />
      <List mediaList dividers strong>
        {movie.map(item => (
          <ListItem
            key={item.id}
            link={item.url}
            external
            title={item.title}
            subtitle={item.time}
            text={item.description}>
            <Image alt={item.title} slot="media" style={{ borderRadius: 8 }} src={item.image} width={80} height={120} />
          </ListItem>
        ))}
      </List>
    </Page>
  );
}

export default Movie;
