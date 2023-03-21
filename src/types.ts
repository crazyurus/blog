export interface Blog {
  id: string;
  title: string;
  time: {
    year: number;
    date: string;
  };
}

export interface BlogDetail {
  id: string;
  title: string;
  description: string;
  content: string;
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
}
