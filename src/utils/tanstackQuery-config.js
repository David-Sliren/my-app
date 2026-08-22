import {
  QueryClient,
  defaultShouldDehydrateQuery,
  environmentManager,
} from "@tanstack/react-query";
import { cache } from "react";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
};

// En servidor: cache() memoiza por request, así que llamar
// getQueryClient() varias veces dentro del mismo request
// devuelve siempre la misma instancia.
// En caso contrario cada llamada crearia una instancia nueva en request
// que no seria reutilizada en cada llamada que coincida con el
// request ya hecho anteriormente

const getServerQueryClient = cache(makeQueryClient);

let browersQueryClient = undefined;

export const getQueryClient = () => {
  if (environmentManager.isServer) {
    return getServerQueryClient();
  } else {
    if (!browersQueryClient) browersQueryClient = makeQueryClient();
    return browersQueryClient;
  }
};
