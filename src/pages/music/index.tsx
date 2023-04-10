import React from 'react';
import { getMusicList } from '../../service';
import type { Music } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  music: Music[];
}

function MusicList(props: Props): JSX.Element {
  const { music } = props;

  return (
    <div className={styles.section}>
      <ol className={styles.list}>
        {music.map(item => (
          <li key={item.id}>
            <div className={styles.music}>
              <span className="flex-shrink-0">{item.time}</span>
              <a
                className="flex-shrink-0"
                href={`https://music.163.com/#/song?id=${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
              <span className="flex-grow text-ellipsis whitespace-nowrap overflow-hidden">
                -- {item.author.join('、')}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const music = await getMusicList();
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return {
    props: {
      title: `${defaultTitle} music`,
      music
    }
  };
}

export default MusicList;
