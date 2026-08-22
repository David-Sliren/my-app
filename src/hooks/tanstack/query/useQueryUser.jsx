import { getAllUsers, getById } from "@/services/user/user";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

// opciones para hacer prechechin en el servidor
export const userQueryAllOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

// useSuspenseQuery para que los datos vengan precargados desde el servidor
export const useUserQueryAll = () => useSuspenseQuery(userQueryAllOptions());

export const userQueryByIdOptions = (id) =>
  queryOptions({
    queryKey: ["user", id],
    queryFn: () => getById(id),
  });

export const useUserQueryById = (id) =>
  useSuspenseQuery(userQueryByIdOptions(id));
