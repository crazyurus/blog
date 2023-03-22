import React from 'react';
import { getRepositoryList } from '../../service';
import type { Repository } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  repositories: Repository[];
}

function RepositoryList(props: Props): JSX.Element {
  const { repositories } = props;

  return (
    <div className={styles.section}>
      <ol className={styles.list}>
        {repositories.map(repository => (
          <li key={repository.id}>
            <div className={styles.repository}>
              <span className="flex-shrink-0">{repository.time}</span>
              <a className="flex-shrink-0" href={repository.url} target="_blank">
                {repository.name}
              </a>
              {repository.description && (
                <span className="flex-grow text-ellipsis whitespace-nowrap overflow-hidden">
                  -- {repository.description}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const repositories = await getRepositoryList();
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return {
    props: {
      title: `${defaultTitle} repositories`,
      repositories,
    },
  };
}

export default RepositoryList;
