import React, { Fragment } from 'react';

import { getCarBlogList } from '@/service';

import type { CarBlog } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  blogs: Record<string, CarBlog[]>;
}

function CarBlogList(props: Props): JSX.Element {
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
                    <a className="flex-shrink-0" href={blog.url} target="_blank" rel="noopener noreferrer">
                      {blog.title}
                    </a>
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
  const blogs = await getCarBlogList();
  const result: Props['blogs'] = {};
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  blogs.forEach(item => {
    if (!result[item.time.year]) {
      result[item.time.year] = [];
    }

    result[item.time.year].push(item);
  });

  return {
    props: {
      title: `${defaultTitle} WeChat`,
      blogs: result
    }
  };
}

export default CarBlogList;
