import { getAllContribution } from "@/services/contribution/contribution";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

// opciones para hacer prechechin en el servidor
export const contributionQueryOptions = () =>
  queryOptions({
    queryKey: ["contributions"],
    queryFn: getAllContribution,
  });

// useSuspenseQuery para que los datos vengan precargados desde el servidor
export const useContributionQueryAll = () =>
  useSuspenseQuery(contributionQueryOptions());
