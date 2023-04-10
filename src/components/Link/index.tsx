import React, { type PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  url: string;
  content: string;
}

function Link(props: PropsWithChildren<Props>): JSX.Element {
  const { url, content } = props;

  return (
    <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
      <Image
        alt={content}
        src="https://github.githubassets.com/images/icons/emoji/unicode/1f30f.png"
        width={18}
        height={18}
      />
      <span>{content}</span>
    </a>
  );
}

export default Link;
