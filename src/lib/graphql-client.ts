// import { graphqlApi } from "@/helpers";
import { GraphQLClient } from "graphql-request";

export const graphqlApi =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_GRAPHQL_API as string)
    : "http://0.0.0.0:4000/graphql";

export const graphqlClient = new GraphQLClient(graphqlApi);
