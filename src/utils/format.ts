import dayjs from 'dayjs';

export function formatYearAndDate(timestamp: number): {
  year: number;
  date: string;
} {
  const time = dayjs(timestamp * 1000);

  return {
    year: time.year(),
    date: time.format('MM-DD'),
  };
}
