import { useMemo } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import apolloCache from "./apolloCache";

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient() {
  return new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: apolloCache,
  });
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === "undefined") return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
