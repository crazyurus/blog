import React from 'react';
import friends from '../../../constants/friends';
import type { Friend } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  friends: Friend[];
}

function MusicList(props: Props): JSX.Element {
  const { friends } = props;

  return (
    <div className={styles.section}>
      <ol className={styles.list}>
        {friends.map(item => (
          <li key={item.url}>
            <a className={styles.friend} href={item.url} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ol>
      <p className={styles.after}>
        想成为我的朋友出现在这里？
        <a href="https://wj.qq.com/s2/11991568/cfb8/" target="_blank">
          请戳这里填写问卷
        </a>
      </p>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return {
    props: {
      title: `${defaultTitle} friends`,
      friends,
    },
  };
}

export default MusicList;
