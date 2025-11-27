import classNames from 'classnames';
import { Navbar, Page } from 'framework7-react';
import Image from 'next/image';
import useSWR from 'swr';

import type { MovieDetail } from '../../types';
import { get } from '../../utils/request';
import styles from './[id].module.scss';

interface Response {
  data: {
    movie: MovieDetail;
  };
}

interface Props {
  id: string;
}

function MovieDetail(props: Props): JSX.Element {
  const { id } = props;
  const { data: movie } = useSWR<Response['data']['movie']>(`/api/movies/${id}`, async (url: string) => {
    const response = await get<Response>(url);
    const { movie } = response.data;

    return movie;
  });

  return (
    <Page name="movie">
      {movie ? (
        <>
          <div className={styles.header} style={{ backgroundImage: `url(${movie.image})` }}>
            <div className={styles.navbar}>
              <Navbar backLink />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{movie.title}</div>
              <div className={styles.line}>
                {movie.rate} | {movie.time} 上映 | {movie.duration} 分钟
              </div>
              <div className={styles.line}>{movie.categories.join(' ')}</div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>剧情简介</div>
            <div className={styles.content}>{movie.description}</div>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>相关演员</div>
            <div className={styles.list}>
              {movie.credits.map(credit => (
                <a
                  href={`https://www.themoviedb.org/person/${credit.id}`}
                  target="_blank"
                  key={credit.id}
                  className={classNames(styles.credit, 'external')}
                  rel="noopener noreferrer">
                  <Image className={styles.avatar} src={credit.avatar} width={48} height={48} alt="avatar" />
                  <div className={styles.name}>{credit.name}</div>
                  <div className={styles.character}>{credit.character}</div>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </Page>
  );
}

export default MovieDetail;
