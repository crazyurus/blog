interface BaseBlog {
  id: string;
  title: string;
  time: string;
}

export interface Blog extends BaseBlog {
  wordCount: number;
  readTime: string;
  description: string;
  categories: string[];
}

export interface CarBlog extends BaseBlog {
  type: 'text' | 'image';
  url: string;
  image: string;
}

export interface BlogDetail {
  id: string;
  title: string;
  description: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  count: {
    view: number;
    favorite: number;
    like: number;
    comment: number;
  };
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  time: string;
  url: string;
  language: string;
  archived: boolean;
  topics: string[];
  homepage: string;
}

export interface Music {
  id: string;
  name: string;
  author: string[];
  image: string;
  time: string;
  duration: string;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  count: number;
  rate: number;
}

interface Credit {
  id: number;
  name: string;
  avatar: string;
  character: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  categories: string[];
  rate: number;
  duration: number;
  credits: Credit[];
}

export interface Friend {
  name: string;
  url: string;
}

export interface Bot {
  name: string;
  id: string;
  enable: boolean;
}
