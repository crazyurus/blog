import axios from 'axios';
import { formatYearAndDate, formatTime } from './utils/format';
import type { Blog, BlogDetail, Repository } from './types';

export async function getBlogList(): Promise<Blog[]> {
  const { data: response } = await axios.post('https://api.juejin.cn/content_api/v1/article/query_list', {
    user_id: '3438928100072813',
    sort_type: 2,
    cursor: '0',
  });

  return response.data.map((item: any) => {
    return {
      id: item.article_id,
      title: item.article_info.title,
      time: formatYearAndDate(Number(item.article_info.ctime)),
    };
  });
}

export async function getBlogDetail(id: string): Promise<BlogDetail> {
  const { data: response } = await axios.post('https://api.juejin.cn/content_api/v1/article/detail', {
    article_id: id,
  });
  const { article_info: article } = response.data;

  return {
    id: article.article_id,
    title: article.title,
    description: article.brief_content,
    content: article.mark_content,
    count: {
      view: article.view_count,
      favorite: article.collect_count,
      like: article.digg_count,
      comment: article.comment_count,
    },
  };
}

export async function getRepositoryList(): Promise<Repository[]> {
  const { data: response } = await axios.get('https://api.github.com/users/crazyurus/repos?sort=pushed&per_page=100');

  return response.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      time: formatTime(item.pushed_at),
      url: item.html_url,
    };
  });
}
