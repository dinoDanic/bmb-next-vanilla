import { graphqlApi } from "@/helpers";
import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(graphqlApi || "");
