interface Time {
  year: number;
  date: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  categories: string[];
  time: Time;
  date: string;
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
  time: Time;
  url: string;
}

export interface Music {
  id: string;
  name: string;
  author: string[];
  image: string;
  time: string;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  time: string;
  rate: number;
}

export interface Friend {
  name: string;
  url: string;
}

export interface Bot {
  name: string;
  id: string;
}
