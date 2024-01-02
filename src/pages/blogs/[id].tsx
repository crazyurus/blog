import React, { Fragment } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGFM from 'remark-gfm';
import remarkPrism from 'remark-prism';
import { getBlogDetail } from '../../service';
import type { BlogDetail } from '../../types';
import type { GetServerSidePropsContext } from 'next';
import styles from './[id].module.scss';

interface Props {
  title: string;
  detail: BlogDetail;
}

function BlogDetail(props: Props): JSX.Element {
  const { detail } = props;
  const JuejinUserID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const isSelf = JuejinUserID === detail.author.id;
  const content = isSelf ? (
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: detail.content }} />
  ) : (
    <div className={styles.content}>
      这篇文章的作者是 <strong>{detail.author.name}</strong> 不属于本站，请点击下方的「查看原文」阅读
    </div>
  );

  return (
    <Fragment>
      {content}
      <div className={styles.footer}>
        <a href={`https://juejin.cn/post/${detail.id}`} target="_blank" rel="noopener noreferrer">
          查看原文
        </a>
        <span>
          <strong>阅读</strong> <code>{detail.count.view}</code> <strong>赞</strong> <code>{detail.count.like}</code>{' '}
          <strong>收藏</strong> <code>{detail.count.favorite}</code> <strong>评论</strong>{' '}
          <code>{detail.count.comment}</code>
        </span>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{ props: Props }> {
  const { id } = context.params as { id: string };
  const detail = await getBlogDetail(id);
  const content = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkGFM)
    .use(remarkPrism as any)
    .process(detail.content);

  return {
    props: {
      title: detail.title,
      detail: {
        ...detail,
        content: String(content)
      }
    }
  };
}

export default BlogDetail;
