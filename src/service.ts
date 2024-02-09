import type { Blog, BlogDetail, Music, Repository } from './types';
import { formatTime, formatTimestamp, formatYearAndDate } from './utils/format';
import * as http from './utils/request';

export async function getBlogList(): Promise<Blog[]> {
  const userID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const response = await http.post('https://api.juejin.cn/content_api/v1/article/query_list', {
    user_id: userID,
    sort_type: 2,
    cursor: '0'
  });

  return response.data.map((item: any) => {
    return {
      id: item.article_id,
      title: item.article_info.title,
      description: item.article_info.brief_content,
      categories: item.tags.map((item: { tag_name: string }) => item.tag_name),
      time: formatYearAndDate(Number(item.article_info.ctime)),
      date: formatTimestamp(Number(item.article_info.ctime))
    };
  });
}

export async function getBlogDetail(id: string): Promise<BlogDetail> {
  const response = await http.post('https://api.juejin.cn/content_api/v1/article/detail', {
    article_id: id
  });
  const { article_info: article, author_user_info: author } = response.data;

  return {
    id: article.article_id,
    title: article.title,
    description: article.brief_content,
    content: article.mark_content,
    author: {
      id: author.user_id,
      name: author.user_name
    },
    count: {
      view: article.view_count,
      favorite: article.collect_count,
      like: article.digg_count,
      comment: article.comment_count
    }
  };
}

export async function getRepositoryList(): Promise<Repository[]> {
  const userName = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const response = await http.get(`https://api.github.com/users/${userName}/repos?sort=created&per_page=100`);

  if (Array.isArray(response)) {
    return response.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        time: formatYearAndDate(item.created_at),
        url: item.html_url
      };
    });
  }

  return [];
}

export async function getMusicList(): Promise<Music[]> {
  const playlistID = process.env.NEXT_PUBLIC_NETEASE_MUSIC_PLAYLIST_ID;
  const playlistResponse = await http.get(`https://music.163.com/api/v6/playlist/detail?id=${playlistID}&n=1000`);
  const musicIDs = playlistResponse.playlist.trackIds.map((track: any) => ({
    id: track.id
  }));
  const songResponse = await http.get('https://music.163.com/api/v3/song/detail?c=' + JSON.stringify(musicIDs));

  return songResponse.songs.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      author: item.ar.map((r: any) => r.name),
      image: item.al.picUrl,
      time: formatTime(item.publishTime)
    };
  });
}
