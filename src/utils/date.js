import { DateTime } from 'luxon';
import { LOCALES } from 'common';

const importLocales = async () => {
  const list = Object.values(LOCALES);
  list.forEach(async (lng) => await import(`moment/locale/${lng.locale}`));
};

const formatDate = (date) => DateTime(date).toFormat('LL');

const formatTime = (ts) => {
  const date = DateTime.fromMillis(Number(ts));
  return date.toFormat('HH:MM');
};

const date = {
  importLocales,
  formatDate,
  formatTime,
};

export default date;
