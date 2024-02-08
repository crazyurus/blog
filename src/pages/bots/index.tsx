import React from 'react';

import bots from '../../../constants/bots';
import type { Bot } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  bots: Bot[];
}

function BotList(props: Props): JSX.Element {
  const { bots } = props;

  return (
    <div className={styles.section}>
      <p className={styles.before}>
        以下 Bot 可在{' '}
        <a href="https://www.doubao.com/" target="_blank" rel="noopener noreferrer">
          豆包
        </a>{' '}
        中打开：
      </p>
      <ol className={styles.list}>
        {bots.map(item => (
          <li key={item.id}>
            <a
              className={styles.friend}
              href={`https://www.doubao.com/share?botId=${item.id}`}
              target="_blank"
              rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  return {
    props: {
      title: `${defaultTitle} bots`,
      bots
    }
  };
}

export default BotList;
