import dayjs from 'dayjs';

export default function useTimeFormate() {
  function timeFormate(time) {
    return dayjs(time).format('YYYY/MM/DD');
  }

  return {
    timeFormate,
  };
}
