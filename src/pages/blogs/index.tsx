import React, { Fragment } from 'react';
import Link from 'next/link';
import { getBlogList } from '../../service';
import type { Blog } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  blogs: Record<string, Blog[]>;
}

function BlogList(props: Props): JSX.Element {
  const { blogs } = props;
  let total = 1;

  return (
    <Fragment>
      {Object.entries(blogs)
        .reverse()
        .map(([year, blogs]) => (
          <div key={year} className={styles.section}>
            <div className={styles.title}>
              {year} ({blogs.length})
            </div>
            <ol className={styles.list} start={(total += blogs.length) - blogs.length}>
              {blogs.map(blog => (
                <li key={blog.id}>
                  <div className={styles.blog}>
                    <span>{blog.time.date}</span>
                    <Link href={`./blogs/${blog.id}`}>{blog.title}</Link>
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
  const blogs = await getBlogList();
  const result: Props['blogs'] = {};
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  blogs.forEach(item => {
    if (!result[item.time.year]) {
      result[item.time.year] = [];
    }

    result[item.time.year].push(item);
  });

  return {
    props: {
      title: `${defaultTitle} blogs`,
      blogs: result,
    },
  };
}

export default BlogList;
