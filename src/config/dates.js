import { format, formatDistance, parseISO } from "date-fns";

import { es } from "date-fns/locale";

export const defaultDate = (date) => {
  try {
    const objectData = parseISO(date);
    return format(objectData, "MMMM d 'de' y", { locale: es });
  } catch (error) {
    console.log("Error en defaultDate", error);
  }
};

export const momentDate = (start, end = Date.now()) => {
  return formatDistance(new Date(start), new Date(end), {
    addSuffix: true,
    locale: es,
  });
};
