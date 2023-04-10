import React, { Fragment } from 'react';
import { getRepositoryList } from '../../service';
import type { Repository } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  repositories: Record<string, Repository[]>;
}

function RepositoryList(props: Props): JSX.Element {
  const { repositories } = props;
  let total = 1;

  return (
    <Fragment>
      {Object.entries(repositories)
        .reverse()
        .map(([year, repositories]) => (
          <div key={year} className={styles.section}>
            <div className={styles.title}>
              {year} ({repositories.length})
            </div>
            <ol className={styles.list} start={(total += repositories.length) - repositories.length}>
              {repositories.map(repository => (
                <li key={repository.id}>
                  <div className={styles.repository}>
                    <span className="flex-shrink-0">{repository.time.date}</span>
                    <a className="flex-shrink-0" href={repository.url} target="_blank" rel="noopener noreferrer">
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
        ))}
    </Fragment>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const repositories = await getRepositoryList();
  const result: Props['repositories'] = {};
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  repositories.forEach(item => {
    if (!result[item.time.year]) {
      result[item.time.year] = [];
    }

    result[item.time.year].push(item);
  });

  return {
    props: {
      title: `${defaultTitle} repositories`,
      repositories: result
    }
  };
}

export default RepositoryList;
