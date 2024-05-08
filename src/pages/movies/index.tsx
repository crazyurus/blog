import React from 'react';

import { getMovieList } from '../../service';
import type { Movie } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  movies: Movie[];
}

function MovieList(props: Props): JSX.Element {
  const { movies } = props;

  return (
    <div className={styles.section}>
      <ol className={styles.list}>
        {movies.map(item => (
          <li key={item.id}>
            <div className={styles.movie}>
              <span className="flex-shrink-0">{item.time}</span>
              <a
                className="flex-shrink-0"
                href={`https://www.themoviedb.org/movie/${item.id}`}
                target="_blank"
                rel="noopener noreferrer">
                {item.title}
              </a>
              <span className="flex-grow text-ellipsis whitespace-nowrap overflow-hidden">-- {item.rate}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const movies = await getMovieList();
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return {
    props: {
      title: `${defaultTitle} favorite movies`,
      movies
    }
  };
}

export default MovieList;
