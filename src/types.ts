export interface Blog {
  id: string;
  title: string;
  time: {
    year: number;
    date: string;
  };
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  time: string;
  url: string;
}
