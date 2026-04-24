import { compareDesc, parseISO } from "date-fns";

export const sortByDate = (value) => {
  const data = [...value].sort((a, b) => {
    return compareDesc(parseISO(a.date), parseISO(b.date));
  });

  return data;
};
