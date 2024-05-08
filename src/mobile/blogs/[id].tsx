import { Block, BlockTitle, Navbar, Page } from 'framework7-react';
import React from 'react';
import { remark } from 'remark';
import remarkGFM from 'remark-gfm';
import remarkHtml from 'remark-html';
import useSWR from 'swr';

import type { BlogDetail } from '../../types';
import { get } from '../../utils/request';
import styles from './[id].module.scss';

interface Response {
  data: {
    blog: BlogDetail;
  };
}

interface Props {
  id: string;
}

function BlogDetail(props: Props): JSX.Element {
  const { id } = props;
  const { data: blog } = useSWR<Response['data']['blog']>(`/api/blogs/${id}`, async (url: string) => {
    const response = await get<Response>(url);
    const { blog } = response.data;
    const content = await remark().use(remarkHtml, { sanitize: false }).use(remarkGFM).process(blog.content);

    blog.content = content.toString();

    return blog;
  });

  return (
    <Page name="blog">
      <Navbar title={blog?.title} backLink="博客" />
      {blog ? (
        <>
          <BlockTitle medium>{blog.title}</BlockTitle>
          <Block strong>
            <div className={styles.blog} dangerouslySetInnerHTML={{ __html: blog.content }} />
          </Block>
        </>
      ) : null}
    </Page>
  );
}

export default BlogDetail;
