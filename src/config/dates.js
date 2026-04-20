import { format, formatDistance } from "date-fns";

import { es } from "date-fns/locale";

export const defaultDate = (date) => {
  const objectData = new Date(date);
  return format(objectData, "MMMM d 'de' y", { locale: es });
};

export const momentDate = (start, end = Date.now()) => {
  return formatDistance(new Date(start), new Date(end), {
    addSuffix: true,
    locale: es,
  });
};
