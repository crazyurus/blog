import dayjs from 'dayjs';

export function formatYearAndDate(timestamp: number | string): {
  year: number;
  date: string;
} {
  const value = typeof timestamp === 'string' ? timestamp : timestamp * 1000;
  const time = dayjs(value);

  return {
    year: time.year(),
    date: time.format('MM-DD'),
  };
}

export function formatTime(time: string | number): string {
  return dayjs(time).format('YYYY-MM-DD');
}
