import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function formatYearAndDate(timestamp: number | string): {
  year: number;
  date: string;
} {
  const value = typeof timestamp === 'string' ? timestamp : timestamp * 1000;
  const time = dayjs(value);

  return {
    year: time.year(),
    date: time.format('MM-DD')
  };
}

export function formatTime(time: string | number): string {
  return dayjs(time).format('YYYY-MM-DD');
}

export function formatTimestamp(timestamp: string | number): string {
  const value = typeof timestamp === 'string' ? timestamp : timestamp * 1000;

  return dayjs(value).toISOString();
}

export function getTimeDuration(time: number): string {
  return dayjs.duration(time).format('mm:ss');
}
