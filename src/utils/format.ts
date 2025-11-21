import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const format = 'YYYY-MM-DD';

export function formatTime(time: string): string {
  return dayjs(time).format(format);
}

export function formatTimestamp(timestamp: number): string {
  return dayjs(timestamp).format(format);
}

export function getTimeDuration(time: number): string {
  return dayjs.duration(time).format('mm:ss');
}
