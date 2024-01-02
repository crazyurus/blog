interface Time {
  year: number;
  date: string;
}

export interface Blog {
  id: string;
  title: string;
  time: Time;
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
  time: string;
}

export interface Friend {
  name: string;
  url: string;
}

export interface Bot {
  name: string;
  id: string;
}
