import axios from 'axios';
import { formatYearAndDate } from './utils/format';
import type { Blog } from './types';

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
