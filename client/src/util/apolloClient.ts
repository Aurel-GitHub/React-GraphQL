import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "http://localhost:3003/graphiql",
  cache: new InMemoryCache(),
});
