import React, { type PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  url: string;
  title: string;
}

function Link(props: PropsWithChildren<Props>): JSX.Element {
  const { url, title } = props;
  const accessKey = title[0];
  const content = `[${title[0]}]${title.slice(1)}`;

  return (
    <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer" accessKey={accessKey}>
      <Image
        alt={title}
        src="https://github.githubassets.com/images/icons/emoji/unicode/1f30f.png"
        width={18}
        height={18}
      />
      <span>{content}</span>
    </a>
  );
}

export default Link;
