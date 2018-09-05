import fetch from "isomorphic-unfetch";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";

let apolloClient = null;

if (!process.browser) global.fetch = fetch;

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_SERVER,
  credentials: "same-origin"
});

function create(initialState) {
  const token = process.browser ? localStorage.accessToken : null;
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return forward(operation);
  });

  return new ApolloClient({
    connectToDevTools:
      process.env.NODE_ENV === "development" && process.browser,
    ssrMode: !process.browser,
    link: concat(middlewareLink, httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState, token) {
  // creacion en server
  if (!process.browser) return create(initialState, token);

  // creacion en el cliente
  if (!apolloClient) apolloClient = create(initialState, token);

  return apolloClient;
}
