import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "http://167.235.150.40:4000/graphql"
  // "http://0.0.0.0:4000/graphql"
);
