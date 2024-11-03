import { format } from 'date-fns';
import { enUS, ru, de, zhCN } from 'date-fns/locale';

const locales = {
  en: enUS,
  ru: ru,
  de: de,
  zh: zhCN
};

function formatRange(startDate, endDate, localeKey) {
  const locale = locales[localeKey] || enUS; // Дефолт - английский
  const formattedStart = format(new Date(startDate), 'd MMMM', { locale });
  const formattedEnd = format(new Date(endDate), 'd MMMM', { locale });
  return `${formattedStart} - ${formattedEnd}`;
}

function DateRangeComponent({ startDate, endDate, language }) {
  return (
    <div>
      <p>{formatRange(startDate, endDate, language)}</p>
    </div>
  );
}

export default DateRangeComponent;
