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

export function formatTime(time: string | number): string {
  return dayjs(time).format('YYYY-MM-DD');
}
