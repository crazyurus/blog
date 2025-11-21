import bots from '../constants/bots';
import friends from '../constants/friends';
import type { Blog, BlogDetail, Bot, CarBlog, Friend, Movie, MovieDetail, Music, Repository } from './types';
import { formatTime, formatTimestamp, formatYearAndDate, getTimeDuration } from './utils/format';
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
      date: formatTimestamp(Number(item.article_info.ctime)),
      wordCount: item.article_info.content_count,
      readTime: item.article_info.read_time
    };
  });
}

export async function getBlogDetail(id: string): Promise<BlogDetail> {
  const response = await http.post('https://api.juejin.cn/content_api/v1/article/detail', {
    article_id: id,
    forbid_count: true
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
        url: item.html_url,
        language: item.language,
        archived: item.archived,
        topics: item.topics,
        homepage: item.homepage
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
      time: formatTime(item.publishTime),
      duration: getTimeDuration(item.dt)
    };
  });
}

const TMDB_CDN_URL = 'https://image.tmdb.org/t/p/original';

export async function getMovieList(): Promise<Movie[]> {
  const accountID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;
  const apiKey = process.env.TMDB_API_KEY;
  const response = await http.get(
    `https://api.themoviedb.org/3/account/${accountID}/favorite/movies?language=zh-CN&page=1&sort_by=created_at.desc`,
    {
      Authorization: `Bearer ${apiKey}`,
      Origin: 'https://developer.themoviedb.org'
    }
  );

  return response.results.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      description: item.overview.trim(),
      image: TMDB_CDN_URL + item.poster_path,
      time: item.release_date,
      count: item.vote_count,
      rate: item.vote_average
    };
  });
}

export async function getMovieDetail(id: string): Promise<MovieDetail> {
  const apiKey = process.env.TMDB_API_KEY;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Origin: 'https://developer.themoviedb.org'
  };
  const [response, creditResponse] = await Promise.all([
    http.get(`https://api.themoviedb.org/3/movie/${id}?language=zh-CN`, headers),
    http.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=zh-CN`, headers)
  ]);

  return {
    id: response.id,
    title: response.title,
    description: response.overview.trim(),
    image: TMDB_CDN_URL + response.backdrop_path,
    time: response.release_date,
    categories: response.genres.map((item: any) => item.name),
    rate: response.vote_average,
    duration: response.runtime,
    credits: creditResponse.cast.map((item: any) => ({
      id: item.id,
      name: item.name,
      avatar: item.profile_path
        ? TMDB_CDN_URL + item.profile_path
        : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg',
      character: item.character
    }))
  };
}

export async function getBotList(): Promise<Bot[]> {
  return bots;
}

export async function getFriendList(): Promise<Friend[]> {
  return friends;
}

export async function getCarBlogList(): Promise<CarBlog[]> {
  const albumIDs = ['4103003578287964164', '4051681233619566601', '4060078334011424793'];
  const bizID = 'MjM5MDQ5MTMyMw==';
  const response = await Promise.all(
    albumIDs.map(id =>
      http.get(
        `https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=${bizID}&album_id=${id}&count=1000&f=json`
      )
    )
  );

  return response
    .map(item => item.getalbum_resp.article_list)
    .flat()
    .sort((a: any, b: any) => b.create_time - a.create_time)
    .map((item: any) => ({
      id: item.msgid,
      title: item.title,
      url: item.url,
      time: formatYearAndDate(Number(item.create_time)),
      date: formatTimestamp(Number(item.create_time)),
      image: item.cover_img_1_1
    }));
}
